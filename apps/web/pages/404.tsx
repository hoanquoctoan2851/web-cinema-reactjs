import type { ReactElement } from 'react'
import Link from 'next/link'

/** Import Modules */
import { LayoutNoNavbar } from '@hotato/web/modules'

const Page404 = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        Go back home
      </Link>
    </>
  )
}

Page404.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutNoNavbar>
      {page}
    </LayoutNoNavbar>
  )
}

export default Page404