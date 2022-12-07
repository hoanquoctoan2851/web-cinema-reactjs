import {useEffect } from "react"
import { useSession } from "next-auth/react"
import { Banner, BackgroundGlobal } from '@hotato/web/modules'
import { Menu } from 'antd';
import { LinkOutlined, TagOutlined  } from '@ant-design/icons';
export function ProtectedPage() {
  const { data: session } = useSession()

  useEffect(() => {
    console.log('session', session);
  }, [session])
  // If no session exists, display access denied message
    return (
    <div className="!w-full flex flex-col items-center px-12">
      <div className="border-b-2 pb-4 w-full">
      <Menu mode="horizontal" className="flex flex-wrap !w-full border-b-2" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <div className="flex flex-row items-baseline">
          <span className="text-3xl  !leading-0 font-medium">08</span>
          /12-T5
        </div>
      </Menu.Item>
      <Menu.Item key="2">
      <div className="flex flex-row items-baseline">
          <span className="text-3xl  !leading-0 font-medium">09</span>
          /12-T6
        </div>
      </Menu.Item><Menu.Item key="3">
      <div className="flex flex-row items-baseline">
          <span className="text-3xl  !leading-0 font-medium">10</span>
          /12-T7
        </div>
      </Menu.Item><Menu.Item key="9">
      <div className="flex flex-row items-baseline">
          <span className="text-3xl  !leading-0 font-medium">11</span>
          /12-CN
        </div>
      </Menu.Item><Menu.Item key="4">
      <div className="flex flex-row items-baseline">
          <span className="text-3xl  !leading-0 font-medium">12</span>
          /12-T2
        </div>
      </Menu.Item><Menu.Item key="5">
      <div className="flex flex-row items-baseline">
          <span className="text-3xl  !leading-0 font-medium">13</span>
          /12-T3
        </div>
      </Menu.Item><Menu.Item key="6">
      <div className="flex flex-row items-baseline">
          <span className="text-3xl  !leading-0 font-medium">14</span>
          /12-T4
        </div>
      </Menu.Item><Menu.Item key="7">
      <div className="flex flex-row items-baseline">
          <span className="text-3xl  !leading-0 font-medium">15</span>
          /12-T5
        </div>
      </Menu.Item>
      <Menu.Item key="8">
      <div className="flex flex-row items-baseline">
          <span className="text-3xl  !leading-0 font-medium">16</span>
          /12-T6
        </div>
      </Menu.Item>
      <Menu.Item key="8">
      <div className="flex flex-row items-baseline">
          <span className="text-3xl  !leading-0 font-medium">17</span>
          /12-T7
        </div>
      </Menu.Item>
      <Menu.Item key="8">
      <div className="flex flex-row items-baseline">
          <span className="text-3xl  !leading-0 font-medium">17</span>
          /12-CN
        </div>
      </Menu.Item>
    </Menu>
      </div>
    <div className="flex flex-row w-full mt-4">
      <img src="https://files.betacorp.vn/files/media/images/2022/12/02/untitled-1-102903-021222-32.jpg" className="rounded-2xl"/>
      <div className="w-full ml-4">
        <div>
          <p className="text-blue-700 text-3xl font-bold">Thanh Sói</p>
          <div className="flex flex-row items-center gap-1">
          <LinkOutlined />
            <p>Hành động</p>
            <TagOutlined />
            <p>109 phút</p>
          </div>
          <div className="text-2xl font-medium mt-4">2D PHỤ ĐỀ</div>
          <div>
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="flex flex-col items-center">
                <button className="bg-stone-300 p-1 hover:bg-stone-400 hover:text-red-500 rounded w-24">9:00</button>
                <p className="text-xs mt-2">170 ghế trống</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="bg-stone-300 p-1 hover:bg-stone-400 hover:text-red-500 rounded w-24">11:00</button>
                <p className="text-xs mt-2">170 ghế trống</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="bg-stone-300 p-1 hover:bg-stone-400 hover:text-red-500 rounded w-24">12:30</button>
                <p className="text-xs mt-2">170 ghế trống</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="bg-stone-300 p-1 hover:bg-stone-400 hover:text-red-500 rounded w-24">14:00</button>
                <p className="text-xs mt-2">170 ghế trống</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="bg-stone-300 p-1 hover:bg-stone-400 hover:text-red-500 rounded w-24">15:00</button>
                <p className="text-xs mt-2">170 ghế trống</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="bg-stone-300 p-1 hover:bg-stone-400 hover:text-red-500 rounded w-24">17:00</button>
                <p className="text-xs mt-2">170 ghế trống</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="bg-stone-300 p-1 hover:bg-stone-400 hover:text-red-500 rounded w-24">19:00</button>
                <p className="text-xs mt-2">170 ghế trống</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="bg-stone-300 p-1 hover:bg-stone-400 hover:text-red-500 rounded w-24">21:00</button>
                <p className="text-xs mt-2">170 ghế trống</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
    }

export default ProtectedPage;