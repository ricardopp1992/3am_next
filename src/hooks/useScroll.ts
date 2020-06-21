import { useEffect, useState } from 'react';

const useScroll = (onTop: boolean) => {
  const [stickyMenu, setSticky] = useState(onTop);

  const triggerScrollPositon = () => {}

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if (window.scrollY < 150 && !onTop) {
        setSticky(false);
      }
      if (window.scrollY > 150 && onTop) {
        setSticky(true);
      }
    });
    return window.removeEventListener('scroll', triggerScrollPositon);
  }, [onTop]);

  return stickyMenu;
}

export default useScroll;