import { useState, useCallback } from 'react';

import { SCROLL_DIRECTION } from '../constants';
import useWindowListener from './useWindowListener';

export const useScrollDirection = (gap = null, mounted = false) => {
  const threshold = gap || 100;
  const [scrollDir, setScrollDir] = useState(SCROLL_DIRECTION.up);
  const [prevScrollYPosition, setPrevScrollYPosition] = useState(mounted ? window.scrollY : 0);

  const scrollMoreThanThreshold = useCallback((currentScrollYPos) => (Math.abs(currentScrollYPos - prevScrollYPosition) > threshold),
    [prevScrollYPosition, threshold]);

  const isScrollingUp = useCallback((currentScrollYPos) => (
    currentScrollYPos > prevScrollYPosition
    && !(prevScrollYPosition > 0 && currentScrollYPos === 0)
    && !(currentScrollYPos > 0 && prevScrollYPosition === 0)
  ), [prevScrollYPosition]);

  const updateScrollDirection = useCallback(() => {
    const currentScrollYPos = window.scrollY;
    if (scrollMoreThanThreshold(currentScrollYPos)) {
      const newScrollDirection = isScrollingUp(currentScrollYPos) ? SCROLL_DIRECTION.down : SCROLL_DIRECTION.up;
      setScrollDir(newScrollDirection);
      const newPosition = currentScrollYPos > 0 ? currentScrollYPos : 0;
      setPrevScrollYPosition(newPosition);
    }
  }, [isScrollingUp, scrollMoreThanThreshold]);

  const onScroll = () => {
    window.requestAnimationFrame(updateScrollDirection);
  };

  useWindowListener('scroll', onScroll);

  return scrollDir;
};
