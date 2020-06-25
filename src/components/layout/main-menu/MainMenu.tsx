import { FunctionComponent, useState, useEffect, SetStateAction, Dispatch } from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

import styles from '../../../styles/components/_header.module.scss';
import useScroll from '../../../hooks/useScroll';

const MainMenu: FunctionComponent<IMainMenu> = ({ isMobile }) => {
  let onTop: boolean, setIsOnTop: Dispatch<SetStateAction<boolean>>, sticky: boolean;
  const edge: number = 50;
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
      </Container>
    </header>
  );
}

interface IMainMenu {
  isMobile: boolean;
}

export default MainMenu;