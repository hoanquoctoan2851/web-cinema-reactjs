import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import { Layout } from '@hotato/web/modules'

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <AnimatePresence mode='wait'>
          { renderWithLayout(<Component {...pageProps} />) }
        </AnimatePresence>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default CustomApp;
