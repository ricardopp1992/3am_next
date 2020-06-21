import { FunctionComponent, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

import styles from '../../../styles/components/_header.module.scss';
import useScroll from '../../../hooks/useScroll';

const MainMenu: FunctionComponent<IMainMenu> = ({ isMobile }) => {
  let onTop, setIsOnTop, sticky;
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
        height: onTop ? '35vh' : '30vh',
        backgroundColor: onTop ? 'black' : 'rebeccapurple',
      }}
      className={styles.header}>
      <Container>
      { !isMobile && <Link href="/"><a>HOME</a></Link>}
      <Link href="/"><a><img src="/image/3am_logo.png" className={styles.logo} alt="3am logo"/></a></Link>
      { !isMobile && <Link href="/find"><a>FIND</a></Link>}
      </Container>
    </header>
  );
}

interface IMainMenu {
  isMobile: boolean;
}

export default MainMenu;