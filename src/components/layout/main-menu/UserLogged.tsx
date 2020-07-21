import Link from 'next/link';
import { useContext, FunctionComponent } from 'react';

import UserSvg from '../../../assets/user_icon.svg';
import { UserContext } from '../../../context/UserContext';
import { IUserLoggedProps } from '../../../interfaces/UserLogged.interface';

const UserLogged: FunctionComponent<IUserLoggedProps> = ({ mobile }) => {
  const user = useContext(UserContext);

  const isLoggedMobile = () => {
    if (user) {
      return (
        <li><Link href="/logout"><a>Logout</a></Link></li>
      );
    } else {
      return (
        <>
          <li>
            <Link href="/"><a>Sign in <UserSvg /></a></Link>
          </li>
          <li>
            <Link href="/"><a>Sign up <UserSvg /></a></Link>
          </li>
        </>
      );
    }
  }

  const isLoggedDesktop = () => {
    if (user) {
      return <Link href="/logout"><a>Logout</a></Link>
    } else {
      return (
        <>
          <Link href="/signin"><a>Sign in</a></Link>
          <Link href="/signup"><a>Sign up</a></Link>
        </>
      );
    }
  }

  if (mobile) {
    return isLoggedMobile();
  } else {
    return isLoggedDesktop();
  }
}

export default UserLogged;