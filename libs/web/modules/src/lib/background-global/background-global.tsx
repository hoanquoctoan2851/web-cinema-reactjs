/* eslint-disable-next-line */
export interface BackgroundGlobalProps {}

export function BackgroundGlobal(props: BackgroundGlobalProps) {
  const style = {
    backgroundImage: "url('/assets/images/banner-hero.jpeg')"
  }
  return (
    <div style={style} className="-z-[1] bg-auto fixed top-0 left-0 right-0 bottom-0 bg-no-repeat bg-top"></div>
  );
}

export default BackgroundGlobal;
