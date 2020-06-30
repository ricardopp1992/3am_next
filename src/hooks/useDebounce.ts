import { useState, useEffect } from "react"

const useDebounce = (isMobile: boolean) => {
  const firstBreak = isMobile ? 'mobile' : 'desktop';
  const [breakpoint, setBrekpoint] = useState(firstBreak);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window && window.innerWidth < 500 && !isMobile) {
        setBrekpoint('mobile');
      } else if (window && window.innerWidth > 500 && isMobile) {
        setBrekpoint('desktop');
      }
    });

    return window.removeEventListener('resize', () => {});
  }, [isMobile]);

  return breakpoint;
}

export default useDebounce;