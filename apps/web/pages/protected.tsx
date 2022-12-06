import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Banner, BackgroundGlobal } from '@hotato/web/modules'
export function ProtectedPage() {
  const { data: session } = useSession()

  useEffect(() => {
    console.log('session', session);
  }, [session])
  // If no session exists, display access denied message
  if (!session) {
    return (
      <h1>Need Login</h1>
    )
  }

  return (
    <>
      <h1>Protected</h1>
      <BackgroundGlobal/>
      <Banner/>
    </>
  );
}

export default ProtectedPage;