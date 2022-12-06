import { motion } from 'framer-motion'
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface SectionProps {
  children: ReactNode;
  className: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial='initial' animate='animate'
      className={className}
    >
      { children }
    </motion.section>
  );
}

export default Section;
