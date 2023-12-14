import { useState } from 'react';
import { navigate } from 'gatsby';

const useSwipe = () => {
  const [xMousePosition, setXMousePosition] = useState(null);
  const [yMousePosition, setYMousePosition] = useState(null);

  const handleClick = (e, url, onChange) => {
    e.stopPropagation();
    if (xMousePosition !== e.clientX || yMousePosition !== e.clientY) {
      e.preventDefault();
    } else {
      if (url) navigate(url);
      if (onChange) onChange();
    }
  };

  const handleMouseDown = e => {
    e.preventDefault();
    setXMousePosition(e.clientX);
    setYMousePosition(e.clientY);
  };
  return { handleClick, handleMouseDown };
};

export default useSwipe;
