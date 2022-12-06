import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Session } from "next-auth"
/** Import Components */
import { IMenuItem } from '@hotato/web/components';
import { ButtonPrimary } from '@hotato/shared/components';

/* eslint-disable-next-line */
export interface MenuMobileProps {
  openNavbar: boolean;
  handleOpenNavbar: any;
  logoUrl: string;
  menus: IMenuItem[];
  session: Session;
}

export function MenuMobile({ menus, openNavbar, handleOpenNavbar, logoUrl }: MenuMobileProps) {
  const renderMenus = menus?.map((menu: IMenuItem) => {
    return (
      <li key={menu.name} className="mb-1">
        <Link className="block dark:text-white p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
        href={menu.href}>
          {menu.name}
        </Link>
      </li>
    )
  })
  return (
    <motion.div
      layout
      style={{ left: openNavbar ? "0" : "-500px" }}
      className={`lg:hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}>
      <div className={`${openNavbar ? '' : 'hidden'} lg:hidden navbar-backdrop fixed inset-0 bg-black/50`}></div>
      <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white dark:bg-black border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <a className="mr-auto text-3xl font-semibold leading-none" href="/">
            <img className="h-10" src={logoUrl} alt="" width="auto" />
          </a>
          <button
            onClick={() => handleOpenNavbar()}
            className="navbar-close"
          >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
           className="w-6 h-6 dark:text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </button>
        </div>
        <div>
          <ul>
           {renderMenus}
          </ul>
          <div className="mt-4 pt-6 border-t border-blueGray-100">
            <ButtonPrimary
              path="/login"
              outline
              className="block w-full mb-3"
            >
              Sign Up
            </ButtonPrimary>
            <ButtonPrimary
              path="/register"
              className="block w-full"
            >
              Sign In
            </ButtonPrimary>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

MenuMobile.defaultProps = {
  logoUrl: '/assets/logo_hotato.png'
}

export default MenuMobile;
