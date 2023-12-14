import React from 'react';
import { Waypoint } from 'react-waypoint';
import { useLottie } from 'lottie-react';

export default ({
  animation,
  loop,
  autoplay,
  delay,
  topOffset,
  bottomOffset,
  onScroll,
}) => {
  const options = { animationData: animation, loop, autoplay };
  const { View, play } = useLottie(options);
  if (!onScroll) setTimeout(() => play(), delay);

  return (
    <>
      {onScroll && (
        <Waypoint
          topOffset={topOffset}
          bottomOffset={bottomOffset}
          onEnter={() => setTimeout(() => play(), delay)}
        />
      )}
      {View}
    </>
  );
};
