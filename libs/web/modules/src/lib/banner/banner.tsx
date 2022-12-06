import { Input } from 'antd';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { SearchOutlined } from '@ant-design/icons';
/** Import Components */
import { BoxApp, IApplication, Section } from '@hotato/web/components'

/** Import Services */
import { fadeInUp, stagger, authService } from '@hotato/shared/services'

/** Import Data Fake */
import { applications } from './data.mock'
import { useEffect } from 'react';
/* eslint-disable-next-line */
export interface BannerProps {}

export function Banner(props: BannerProps) {

  const listApplication = applications?.map((app: IApplication) => {
    return (<BoxApp key={app.id} app={app} />)
  })

  const handleGetUserInfo = async () => {
    const data = await authService.getUserInfo()
    console.log('handleGetUserInfo', data);
  }

  useEffect(() => {
    handleGetUserInfo()
  }, [])

  return (
    <Section className="mod-banner min-h-screen relative">
      <div className="bg-black/50 backdrop-blur-sm -z-[1] absolute top-0 left-0 right-0 bottom-0"></div>
      <motion.div
        variants={fadeInUp}
        className="container py-12 md:py-0 mx-auto min-h-screen flex flex-col items-center justify-center px-2 md:px-0"
      >
        <div
          className="w-12 h-12 md:w-20 md:h-20 relative mb-4"
        >
          <Image
            src="/assets/logo_hotato_web.png"
            alt="Hotato logo"
            fill
          />
        </div>
        <h1
          className="mb-8 uppercase text-center font-extrabold text-transparent text-3xl md:text-7xl bg-clip-text bg-gradient-to-b from-orange-200 to-orange-500"
        >
          Hotato{' '}
          <Typewriter
            words={['Repeat', 'Analytics', 'Care Ads', 'Systems']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        <Input
          size="large"
          className="max-w-[400px] md:max-w-4xl mx-auto border-none"
          placeholder="Tìm kiếm ứng dụng"
          allowClear
          prefix={<SearchOutlined />}
        />
        <motion.div
          variants={stagger}
          className="list-application max-w-5xl w-full flex justify-center flex-wrap mt-16"
        >
          { listApplication }
        </motion.div>
        <div className="paging flex justify-center mt-6">
          <span className="w-3 h-3 bg-orange-400 rounded-full mr-2 cursor-pointer"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full mr-2 cursor-pointer"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full mr-2 cursor-pointer"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full mr-2 cursor-pointer"></span>
        </div>
      </motion.div>
    </Section>
  );
}

export default Banner;
