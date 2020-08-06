import { useEffect, useState } from 'react';
import { GetServerSidePropsContext, GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import SignInMobile from '../components/signIn/signInMobile';
import SignInDesktop from '../components/signIn/signInDesktop';
import { IServerSideRequest } from '../../interfaces/IServer';
import { FlashErrorContext } from '../context/flashErrorContext';

const SignIn: NextPage<ISignInProps> = ({ error, isMobile }) => {

  return (
  <FlashErrorContext.Provider value={{ error }}>
    <Head>
      <link rel="icon" href="/3am_favicon.png" />
    </Head>
    {
      isMobile ?
       <SignInMobile />
      :
      <SignInDesktop />
    }
  </FlashErrorContext.Provider>
  );
}

interface ISignInProps {
  error: string[];
  isMobile: boolean;
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const req: IServerSideRequest = ctx.req;
  const error = req.flash().error || false;

  return { props: { error } };
}

export default SignIn;
