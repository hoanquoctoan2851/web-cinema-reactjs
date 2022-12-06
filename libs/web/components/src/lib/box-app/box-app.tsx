import styles from './box-app.module.scss';
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeInUp } from '@hotato/shared/services'
/* eslint-disable-next-line */
export interface IApplication {
  id: number;
  name: string;
  subName: string;
  icon: string;
}

export interface BoxAppProps {
  app: IApplication
}

export function BoxApp({ app }: BoxAppProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`text-center w-24 md:w-40 cursor-pointer mb-8 mx-2 md:mx-4 ${styles['box-app']}`}>
      <div className={`w-12 h-12 md:w-16 md:h-16 relative mx-auto box-image transition-transform duration-300 ${styles['box-image']}`}>
        <Image
          src={app.icon}
          fill
          alt="logo-hotato"
        />
      </div>
      <h2 className="text-white mt-4 font-bold">{app.name}</h2>
      <span className="text-gray-400 text-[12px] font-semibold">{app.subName}</span>
    </motion.div>
  );
}

export default BoxApp;
