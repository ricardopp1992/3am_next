import { useEffect, useState } from 'react';

const useScroll = (onTop: boolean, edge: number) => {
  const [stickyMenu, setSticky] = useState(onTop);

  const triggerScrollPositon = () => {}

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if (window.scrollY < edge && !onTop) {
        setSticky(false);
      }
      if (window.scrollY > edge && onTop) {
        setSticky(true);
      }
    });
    return window.removeEventListener('scroll', triggerScrollPositon);
  }, [onTop]);

  return stickyMenu;
}

export default useScroll;