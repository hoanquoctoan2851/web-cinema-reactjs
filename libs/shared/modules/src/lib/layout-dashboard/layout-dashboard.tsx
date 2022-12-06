import { ReactNode } from 'react';
import styles from './layout-dashboard.module.scss';
import InfoHeader from "../../../../components/src/lib/info-header/info-header";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  MenuOutlined,
  BellOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Popover, Avatar, Dropdown } from 'antd';
import React, { useState } from 'react';
export interface LayoutDashboard {
  children: ReactNode;
}

const { Header, Sider, Content } = Layout;
export function LayoutDashboard({ children }: LayoutDashboard) {
  const [collapsed, setCollapsed] = useState(false);
  const handleOpenSidebar =() => {
    setCollapsed(!collapsed)
  }
  const text = <span>Title</span>;
  const content = (
    <div className="h-[500px] w-[450px] bg-amber-400">
      <p>Content</p>
      <p>Content</p>
    </div>
  )
  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' }, // which is required
    {
      label: 'sub menu',
      key: 'submenu',
      children: [{ label: 'item 3', key: 'submenu-item-1' }],
    },
  ]
  return (
    <Layout className="layout-dashboard">
      <Sider trigger={null} collapsible collapsed={collapsed} className="h-[100vh] top-0 left-0 z-10 fixed bg-white">
        <div className="logo cursor-pointer bg-primary-origin w-full h-16 flex flex-row items-center justify-center">
          <img className="w-10" src="https://admin.hotato.vn/assets/logo_hotato_web.png"/>
          <span className={"font-semibold ml-4" + (collapsed ? ' hidden' : '')}>Hotato System</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className="h-[100vh]"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className={`p-0 text-white w-full fixed right-0 top-0 ` + styles[collapsed ? 'sidebar-opened': 'sidebar-closed']}>
          <div className="flex justify-between items-center w-full">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger ml-5 text-2xl',
              onClick: handleOpenSidebar,
            })}
            <InfoHeader></InfoHeader>
          </div>
        </Header>
        <Content
          className={`mt-[64px] p-6` + (!collapsed ? ` ml-[200px] `: ` ml-[80px] `) + styles['dashboard-content']}
        >
          { children }
        </Content>
      </Layout>
    </Layout>
  )
}
export default LayoutDashboard;
