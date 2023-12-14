import React from 'react';
import GatsbyImage from '../../Image/GatsbyImage';
import Play from '../assets/Play';
import { SlideWrapper } from '../styles/VideoTestimonial.styled';

const VideoTestimonial = ({ component, ...props }) => (
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
);

export default VideoTestimonial;
