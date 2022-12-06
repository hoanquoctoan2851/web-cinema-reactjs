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
        <title>Hotato Website</title>
        <meta name="description" content="Hotato-Website"/>
      </Head>
      <div className="relative z-[1]">
        <Header/>
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default Layout;
