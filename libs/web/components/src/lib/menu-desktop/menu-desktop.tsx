import { motion } from 'framer-motion'
import type { Session } from "next-auth"
/** Import Component */
import { MenuItem, IMenuItem } from '@hotato/web/components'
import { ButtonPrimary, DarkModeButton } from '@hotato/shared/components'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Button } from 'antd';
/** Import Services */
import { fadeLeft, fadeRight, fadeInDown } from '@hotato/shared/services'

/* eslint-disable-next-line */
export interface MenuDesktopProps {
  menus: IMenuItem[];
  logoUrl: string;
  handleOpenNavbar: any;
  session: Session;
}
const items = [
  {
    label: <a href="https://www.antgroup.com">Beta Thái Nguyên</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">Beta Hà Nội</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Beta Phú Thọ',
    key: '3',
  },
];
export function MenuDesktop({ menus, logoUrl, handleOpenNavbar, session }: MenuDesktopProps) {
  const renderMenus = menus?.map((menu: IMenuItem) => {
    return <MenuItem key={menu.name} href={menu.href} name={menu.name}/>
  })


  return (
    <nav className="flex justify-between items-center py-6 w-full text-white">
      <motion.a variants={fadeLeft} href="/" className="text-3xl font-semibold leading-none">
        <img className="h-16" src={logoUrl} alt="" width="auto" />
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
      <motion.ul variants={fadeInDown} className="hidden mr-4 lg:flex lg:items-center lg:w-auto lg:space-x-12">
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <Button className='px-4'>Chọn tỉnh thành</Button>
      </Dropdown>
      </motion.ul>
      <motion.ul variants={fadeInDown} className="hidden ml-4 lg:flex lg:items-center lg:w-auto lg:space-x-12">
       {renderMenus}
      </motion.ul>
    </nav>
  );
}

MenuDesktop.defaultProps = {
  menus: [],
  logoUrl: '/assets/logo_hotato.png'
}

export default MenuDesktop;
