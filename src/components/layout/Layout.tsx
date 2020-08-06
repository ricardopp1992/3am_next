import { FunctionComponent, useEffect, useState } from "react";
import Head from "next/head";

import MainMenu from "./main-menu/MainMenu";
import MobileMenu from "./main-menu/MobileMenu";
import Footer from "./footer/Footer"
import { ILayoutProps } from "../../../interfaces/components/ILayoutPops.interface";

const Layout: FunctionComponent<ILayoutProps> = ({children, isMobile}) => {
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