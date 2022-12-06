import { motion } from 'framer-motion'
import type { Session } from "next-auth"
/** Import Component */
import { MenuItem, IMenuItem } from '@hotato/web/components'
import { ButtonPrimary, DarkModeButton, InfoUser } from '@hotato/shared/components'
/** Import Services */
import { fadeLeft, fadeRight, fadeInDown, authService } from '@hotato/shared/services'

/* eslint-disable-next-line */
export interface MenuDesktopProps {
  menus: IMenuItem[];
  logoUrl: string;
  handleOpenNavbar: any;
  session: Session;
}

export function MenuDesktop({ menus, logoUrl, handleOpenNavbar, session }: MenuDesktopProps) {
  const renderMenus = menus?.map((menu: IMenuItem) => {
    return <MenuItem key={menu.name} href={menu.href} name={menu.name}/>
  })

  const handleLogout = async (e: any) => {
    try {
      e.preventDefault()
      const { status } = await authService.logout()
      console.log('handleLogout', status);
    } catch (error) {
      console.log('handleLogout error', error);
    }
  }

  return (
    <nav className="flex justify-between items-center py-6 w-full text-white">
      <motion.a variants={fadeLeft} href="/" className="text-3xl font-semibold leading-none">
        <img className="h-10" src={logoUrl} alt="" width="auto" />
      </motion.a>
      <motion.div variants={fadeRight} className="flex flex-row items-center lg:hidden">
        <DarkModeButton />
        <ButtonPrimary
          outline
          onClick={() => handleOpenNavbar()}
        >
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </ButtonPrimary>
      </motion.div>
      <motion.ul variants={fadeInDown} className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
       {renderMenus}
      </motion.ul>
      <motion.div variants={fadeRight} className="hidden lg:flex flex-row items-center">
        { session?.user ?
          (
            <>
              <InfoUser user={session.user} className="mr-4" />
              <ButtonPrimary
                onClick={(e: any) => handleLogout(e)}
                outline
                className="mr-2 px-1 py-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
              </ButtonPrimary>
            </>
          ) :
          (
            <>
              <ButtonPrimary
                path="/login"
                outline
                className="mr-2"
              >
                Log In
              </ButtonPrimary>
              <ButtonPrimary
                path="/register"
                className="mr-2"
              >
                Sign Up
              </ButtonPrimary>
            </>
          )
        }
        <DarkModeButton />
      </motion.div>
    </nav>
  );
}

MenuDesktop.defaultProps = {
  menus: [],
  logoUrl: '/assets/logo_hotato.png'
}

export default MenuDesktop;
