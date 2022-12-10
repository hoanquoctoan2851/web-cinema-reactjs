import Head from 'next/head'
import { Header, Footer } from '@hotato/web/modules'
import { ReactNode } from 'react';
/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <Head>
        <title>Beta Cinema</title>
        <meta name="description" content="Beta Cinema"/>
      </Head>
      <div className="relative z-[1]">
        <Header/>
        <main id="main" className="flex-grow px-44 bg-layout-color py-6 h-screen">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default Layout;
