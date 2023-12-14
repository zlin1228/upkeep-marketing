import React, { useEffect, useState } from 'react';
import ProgressBar from './styles/PageProgressBar';
import { listenToScrollEvent } from './utils/handleScroll';

const PageProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    listenToScrollEvent(setScrollPosition);
  }, [setScrollPosition]);

  return <ProgressBar passive scroll={`${scrollPosition}%`} />;
};

export default PageProgressBar;
