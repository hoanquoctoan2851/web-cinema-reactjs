import Head from 'next/head';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface LayoutNoNavbarProps {
  children: ReactNode;
}

export function LayoutNoNavbar({ children }: LayoutNoNavbarProps) {
  return (
    <>
      <Head>
        <title>Hotato Website</title>
        <meta name="description" content="Hotato-Website"/>
      </Head>
      <div className="relative z-[1]">
        <main id="main" className="flex-grow">
          {children}
        </main>
      </div>
    </>
  );
}

export default LayoutNoNavbar;
