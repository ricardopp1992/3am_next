import { FunctionComponent, useState, useEffect, SetStateAction, Dispatch } from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

import styles from '../../../styles/components/_header.module.scss';
import useScroll from '../../../hooks/useScroll';

const MainMenu: FunctionComponent<IMainMenu> = ({ isMobile, children }) => {
  let onTop: boolean, setIsOnTop: Dispatch<SetStateAction<boolean>>, sticky: boolean;
  if (typeof window !== 'undefined') {
    [onTop, setIsOnTop] = useState(window.scrollY < 150);
    sticky = useScroll(onTop);
  }

  useEffect(() => {
    setIsOnTop(!sticky);
  }, [sticky]);

  return (
    <header
      style={{
        height: onTop ? '20vh' : '15vh',
        backgroundColor: onTop ? 'black' : '#142126',
      }}
      className={styles.header}>
      <Container>
      { !isMobile && <Link href="/"><a>HOME</a></Link>}
      <Link href="/">
        <a>
          <img
            style={{ width: onTop ? '10rem' : '8rem' }}
            src="/image/3am_logo.png"
            className={styles.logo} alt="3am logo"/>
        </a>
      </Link>
      { !isMobile && <Link href="/find"><a>FIND</a></Link>}
      </Container>
    </header>
  );
}

interface IMainMenu {
  isMobile: boolean;
}

export default MainMenu;