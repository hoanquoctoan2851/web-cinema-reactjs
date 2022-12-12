import { useEffect, useState, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import classes from './header.module.scss';
/** Import components */
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { MenuDesktop } from '@hotato/web/components';

/** Import Hooks */
import { useScrollDirection, SCROLL_DIRECTION } from '@hotato/shared/utils';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [pinMenu, setPinMenu] = useState(false);
  const scrollDir = useScrollDirection(null, mounted);
  const headerClass = useMemo(
    () =>
      `${scrollDir === SCROLL_DIRECTION.up ? 'top-0' : '-top-24'} ${
        classes['menuSticky']
      } sticky z-50`,
    [scrollDir]
  );

  const handleOpenNavbar = () => {
    const currentState = !openNavbar;
    setOpenNavbar(currentState);
  };

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && window.innerWidth > 1023) {
      setPinMenu(false);
      const pinMenuNavbar = () => {
        if (window.scrollY > 50) {
          setPinMenu(true);
        } else {
          setPinMenu(false);
        }
      };
      window.addEventListener('scroll', pinMenuNavbar);
      return () => {
        window.removeEventListener('scroll', pinMenuNavbar);
      };
    } else {
      setPinMenu(true);
    }
    return () => console.log('mounted');
  }, []);
  const menus = [
    { name: 'LỊCH CHIẾU THEO RẠP', href: '/protected' },
    { name: 'PHIM', href: '/booking' },
    { name: 'RẠP', href: '/protected' },
    { name: 'GIÁ VÉ', href: '/dashboard' },
    { name: 'TIN MỚI VÀ ƯU ĐÃI', href: '/travel' },
    { name: 'NHƯỢNG QUYỀN', href: '/' },
    { name: 'THÀNH VIÊN', href: '/login' },
  ];

  return (
    <motion.div initial="initial" animate="animate" className={headerClass}>
      <motion.header
        id="header"
        className={`h-20 px-44 flex items-center justify-between w-full border-b border-black z-50 bg-white`}
      >
        <div className="container mx-auto flex justify-between px-4">
          <MenuDesktop
            logoUrl="https://betacinemas.vn/Assets/Common/logo/logo.png"
            session={session}
            menus={menus}
            handleOpenNavbar={() => handleOpenNavbar()}
          />
        </div>
      </motion.header>
    </motion.div>
  );
}

export default Header;
