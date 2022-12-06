
import type { ReactElement } from 'react'
import { LayoutDashboard } from '@hotato/shared/modules'
export function User() {
  return (
    <>
      <h1>Page user </h1>
    </>
  );
}


User.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutDashboard>
      {page}
    </LayoutDashboard>
  )
}

export default User;
