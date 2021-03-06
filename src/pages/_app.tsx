import { IAppIncommingMessage } from '../../interfaces/getInitialProps.interfaces';
import { AppContextType } from 'next/dist/next-server/lib/utils';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import '../styles/application.scss';
import { UserContext } from '../context/UserContext';
import { getIsMobile } from '../util/is-mobile-user-agent';


function MyApp({ Component, pageProps, user, isMobile }) {
  
  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} user={user} isMobile={isMobile} />
    </UserContext.Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContextType) => {
  const { ctx } = appContext;
  const isMobile: boolean = getIsMobile(ctx.req);
  const req: IAppIncommingMessage = ctx.req;
  if (!req.user) {
    return { isMobile };
  }

  const user = {
    id: req.user.id,
    displayName: req.user.displayName
  }

  return { user, isMobile };
}

export default MyApp;