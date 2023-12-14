import { useState } from 'react';

const usePlay = ({ play, setPlay, video, setVideoData }) => {
  const [xMousePosition, setXMousePosition] = useState(null);
  const [yMousePosition, setYMousePosition] = useState(null);

  const handleClick = e => {
    e.stopPropagation();
    if (xMousePosition !== e.clientX || yMousePosition !== e.clientY) {
      e.preventDefault();
    } else {
      setPlay(!play);
      setVideoData(video);
    }
  };

  const handleMouseDown = e => {
    e.preventDefault();
    setXMousePosition(e.clientX);
    setYMousePosition(e.clientY);
  };
  return { handleClick, handleMouseDown };
};

export default usePlay;
