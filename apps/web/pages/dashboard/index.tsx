import { Banner, BackgroundGlobal } from '@hotato/web/modules'
import {Hero, LayoutDashboard} from '@hotato/shared/modules'
import {ReactElement} from "react";
export function About() {
  return (
    <>
      <h1>Dashboard page</h1>
    </>
  );
}
About.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutDashboard>
      {page}
    </LayoutDashboard>
  )
}

export default About;
