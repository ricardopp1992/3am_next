import { GetServerSidePropsContext, GetServerSideProps, NextPage } from 'next';

import SignInMobile from '../components/signIn/signInMobile';
import SignInDesktop from '../components/signIn/signInDesktop';
import { IServerSideRequest } from '../../interfaces/IServer';
import { FlashErrorContext } from '../context/flashErrorContext';
import { IFlashError } from '../../interfaces/models/user.interface';

const SignIn: NextPage<IFlashError> = ({ error }) => {
  return (
  <FlashErrorContext.Provider value={{ error }}>
    <SignInDesktop/>
  </FlashErrorContext.Provider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const req: IServerSideRequest = ctx.req;
  const error = req.flash().error || false;

  return { props: { error } };
}

export default SignIn;
