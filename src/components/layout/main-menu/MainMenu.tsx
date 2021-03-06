import { FunctionComponent, useState, useEffect, SetStateAction, Dispatch, useContext } from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

import styles from '../../../styles/components/_header.module.scss';
import useScroll from '../../../hooks/useScroll';
import { UserContext } from '../../../context/UserContext';
import UserLogged from './UserLogged';

const MainMenu: FunctionComponent<IMainMenu> = ({ isMobile }) => {
  let onTop: boolean, setIsOnTop: Dispatch<SetStateAction<boolean>>, sticky: boolean;
  const edge: number = 50;
  const user = useContext(UserContext);

  if (typeof window !== 'undefined') {
    [onTop, setIsOnTop] = useState(window.scrollY < edge);
    sticky = useScroll(onTop, edge);
  }

  useEffect(() => {
    setIsOnTop(!sticky);
  }, [sticky]);

  return (
    <header
      className={`${sticky && !isMobile ? styles.stickyHeader : styles.header} ${styles.common}`}>
      <Container>
      { !isMobile && <Link href="/"><a>HOME</a></Link>}
      <Link href="/">
        <a>
          <img
            src="/image/3am_logo.png"
            className={`${styles.logo}`}
            alt="3am logo"/>
        </a>
      </Link>
      { !isMobile && <Link href="/find"><a>FIND</a></Link>}
      <div className={styles.authButtons}>
      {
        !isMobile && <UserLogged />
      }
      </div>
      </Container>
    </header>
  );
}

interface IMainMenu {
  isMobile: boolean;
}

export default MainMenu;