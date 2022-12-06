import { useEffect, useState, useMemo } from 'react';
import { useSession } from "next-auth/react"
import { motion } from 'framer-motion'
import classes from './header.module.scss'
/** Import components */
import { MenuDesktop, MenuMobile } from '@hotato/web/components'

/** Import Hooks */
import { useScrollDirection, SCROLL_DIRECTION } from '@hotato/shared/utils'

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const { data: session } = useSession()
  const [mounted, setMounted] = useState(false)
  const [openNavbar, setOpenNavbar] = useState(false)
  const [pinMenu, setPinMenu] = useState(false)
  const scrollDir = useScrollDirection(null, mounted);
  const headerClass = useMemo(() => `${scrollDir === SCROLL_DIRECTION.up ? 'top-0' : '-top-24'} ${classes['menuSticky']} sticky z-50`, [scrollDir]);

  const handleOpenNavbar = () => {
    const currentState = !openNavbar
    setOpenNavbar(currentState)
  }

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined' && window.innerWidth > 1023) {
      setPinMenu(false)
      const pinMenuNavbar = () => {
        if (window.scrollY > 50) {
          setPinMenu(true)
        } else {
          setPinMenu(false)
        }
      }
      window.addEventListener('scroll', pinMenuNavbar)
      return () => {
        window.removeEventListener('scroll', pinMenuNavbar)
      }
    } else {
      setPinMenu(true)
    }
    return () => console.log('mounted')
  }, [])
  const menus = [
    { name: 'Home', href: '/'},
    { name: 'About', href: '/about'},
    { name: 'Protected', href: '/protected'},
    { name: 'Dashboard', href: '/dashboard'},
  ]

  return (
    <motion.div
      initial='initial' animate='animate'
      className={headerClass}
    >
      <motion.header
        id="header"
        className={`h-16 flex items-center justify-between w-full z-50 ${pinMenu ? 'bg-black' : 'bg-black/50' }`}
      >
        <div className="container mx-auto flex justify-between px-4">
          <MenuDesktop session={session} menus={menus} handleOpenNavbar={() => handleOpenNavbar()} />
        </div>
        <MenuMobile
          session={session}
          menus={menus}
          openNavbar={openNavbar}
          handleOpenNavbar={() => handleOpenNavbar()}
        />
      </motion.header>
    </motion.div>
  );
}

export default Header;
