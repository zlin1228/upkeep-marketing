import React, { useState, useEffect } from 'react';
import GatsbyImage from '../../Image/GatsbyImage';
import Play from '../assets/Play';
import { getVideoSlideWidth } from '../utils';
import { SlideWrapper } from '../styles/VideoSlide.styled';

const VideoSlide = ({ component, ...props }) => {
  const [slideWidth, setSlideWidth] = useState('');

  useEffect(() => {
    setSlideWidth(getVideoSlideWidth());
    window.addEventListener('resize', () => {
      setSlideWidth(getVideoSlideWidth());
    });
  }, []);

  return (
    <div style={{ width: slideWidth }} className="slide">
      <SlideWrapper>
        {component?.heading && (
          <>
            <h6>{component?.heading}</h6>
            <div className="overlay" />
          </>
        )}
        <GatsbyImage
          classes="slide-image"
          src={component?.video?.videoThumbnail?.image?.gatsbyImageData}
          alt={component?.video?.videoThumbnail?.image?.alt}
        />
        <Play
          play={props?.play}
          setPlay={props?.setPlay}
          video={component}
          setVideoData={props?.setVideoData}
        />
      </SlideWrapper>
    </div>
  );
};

export default VideoSlide;
