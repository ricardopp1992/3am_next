import { FunctionComponent, useState, MouseEvent } from "react";
import Link from 'next/link';

import styles from '../../../styles/components/_mobile-menu.module.scss';
import HomeSvg from '../../../assets/home_icon.svg';
import SearchSvg from '../../../assets/search_icon.svg';
import UserSvg from '../../../assets/user_icon.svg';

const MobileMenu: FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false);
  const [isShowMenu, setShowMenu] = useState(false);

  const openMenu = (event: MouseEvent) => {
    if (isOpen) {
      setShowMenu(false);
      setTimeout(() => setOpen(false), 600);
    } else {
      setOpen(true);
      setTimeout(() => setShowMenu(prevIsShow => !prevIsShow), 100);
    }
  }

  return (
    <>
      {
        isOpen &&
        <div
          style={{ opacity: isShowMenu ? '1' : '0' }}
          className={styles.mobileMenuModal}>
          <div
            style={{ transform: `translate(${isShowMenu ? '0' : '60vw'}, 0)` }}
            className={styles.mobileMenu}>
            <ul>
              <li>
                <Link href="/"><a>Home <HomeSvg /></a></Link>
              </li>
              <li>
                <Link href="/"><a>Find <SearchSvg /></a></Link>
              </li>
              <li>
                <Link href="/"><a>Sign in <UserSvg /></a></Link>
              </li>
              <li>
                <Link href="/"><a>Sign up <UserSvg /></a></Link>
              </li>
            </ul>
            <img className={styles.logo} src="/image/3am_logo.png" alt="logo" />
          </div>
        </div>
      }

      <div onClick={openMenu} className={styles.menuHamburger} >
        <span className={styles.lines}/>
      </div>
    </>
  );
}

export default MobileMenu;