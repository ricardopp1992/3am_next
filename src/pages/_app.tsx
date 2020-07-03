import { IAppIncommingMessage } from '../../interfaces/getInitialProps.interfaces';
import { AppContextType } from 'next/dist/next-server/lib/utils';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import '../styles/application.scss';
import { UserContext } from '../context/UserContext';

function MyApp({ Component, pageProps, user }) {
  
  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} user={user} />
    </UserContext.Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContextType) => {
  const { ctx } = appContext;
  const req: IAppIncommingMessage = ctx.req;
  if (!req.user) {
    return {};
  }

  const user = {
    id: req.user.id,
    displayName: req.user.displayName
  }

  return { user };
}

export default MyApp;