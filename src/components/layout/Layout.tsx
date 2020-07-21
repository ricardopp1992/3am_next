import { FunctionComponent, useEffect, useState } from "react";
import Head from "next/head";

import MainMenu from "./main-menu/MainMenu";
import MobileMenu from "./main-menu/MobileMenu";
import Footer from "./footer/Footer"

const Layout: FunctionComponent = ({children}) => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = window.innerWidth < 500;
    setMobile(isMobileDevice);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/3am_favicon.png" />
      </Head>
        <MainMenu isMobile={isMobile} />
      { isMobile && <MobileMenu /> }
      <main style={{ width: '100%' }}>
        { children }
      </main>
      <Footer />
    </>
  );
}

export default Layout;