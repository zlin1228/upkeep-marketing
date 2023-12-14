import React, { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import PaginateButton from '../PaginateButton';

const usePaginateButton = (
  array,
  className,
  desktopCount,
  mobileCount,
  reRender
) => {
  const { width } = useWindowSize();
  const [sliceIndex, setSliceIndex] = useState(desktopCount);
  const [activeIndex, setActiveIndex] = useState(desktopCount);

  useEffect(() => {
    const cards = document.querySelectorAll(className);
    setActiveIndex(cards.length);
  }, [sliceIndex, reRender]);

  useEffect(() => {
    if (width < 768) {
      setSliceIndex(mobileCount);
    } else {
      setSliceIndex(desktopCount);
    }
  }, [width, reRender]);

  return {
    text: `Showing <b>${activeIndex}</b> of <b>${array?.length}</b> results`,
    sliceIndex,
    setSliceIndex,
    PaginateButton: (
      <PaginateButton
        array={array}
        text="View More"
        sliceIndex={sliceIndex}
        setSliceIndex={setSliceIndex}
        count={desktopCount}
      />
    ),
  };
};

export default usePaginateButton;
