import DarkModeButton from "../dark-mode-button/dark-mode-button";
import {Avatar, Input, Dropdown, Popover, Button } from "antd";
import {BoxApp, IApplication} from "@hotato/web/components";
import {BellOutlined, MenuOutlined, AudioOutlined} from "@ant-design/icons";
import React from "react";
import {applications} from "../../../../../web/modules/src/lib/banner/data.mock";
import {stagger} from "@hotato/shared/services";
import {motion} from "framer-motion";
interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}
export interface InfoUserProps {
  user?: User;
  className?: string;
}
const { Search } = Input
const onSearch = (value: string) => console.log(value)
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
export const InfoHeader: React.FC<InfoUserProps> = ({ user, className }: InfoUserProps) => {
  const listApplication = applications?.map((app: IApplication) => {
    return (<BoxApp key={app.id} app={app} />)
  })
  const header = (
    <div className="flex justify-between items-center">
      <div>
        <div className="cursor-pointer">
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <span className="ml-2">Hoàng Quốc Toán</span>
        </div>
      </div>
      <div>
        <Search
          placeholder="Tìm kiếm"
          allowClear
          size="small"
          onSearch={ onSearch }
          style={{
            width: 200,
          }}
        />
      </div>
    </div>
  )
  const content = (
    <div className="h-[500px] w-[450px] overflow-x-hidden">
      <motion.div
        variants={stagger}
        className="list-application max-w-5xl w-full flex justify-center flex-wrap mt-4"
      >
        { listApplication }
      </motion.div>
    </div>
  )
  const items = [
    {
      key: '1',
      label: (
        <div>Thông tin cá nhân</div>
      ),
    },
    {
      key: '2',
      label: (
        <div>Chỉnh sửa</div>
      ),
    },
    {
      key: '3',
      label: (
        <div>Đăng xuất</div>
      ),
    }]
  return (
    <div className="flex gap-6 items-center mr-4 com-info-header">
      <Button>Click</Button>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        trigger={['click']}
        arrow
      >
        <div className="cursor-pointer">
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <span className="ml-2">Hoàng Quốc Toán</span>
        </div>
      </Dropdown>
      <BellOutlined className=" text-xl cursor-pointer" />
      <DarkModeButton></DarkModeButton>
      <Popover placement="bottomRight" title={header} content={content} trigger="click">
        <MenuOutlined className="text-xl cursor-pointer"/>
      </Popover>
    </div>
  );
}

export default InfoHeader;
