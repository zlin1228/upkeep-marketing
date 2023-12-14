import React, { useState, useRef } from 'react';
import shortid from 'shortid';
import Slider from 'react-slick';
import Header from './components/Header';
import VideoSlide from './components/VideoSlide';
import Controls from './components/Controls';
import VideoModal from '../Modal/VideoModal';
import { sliderSettings } from './utils';
import { getYoutubeId } from '../../utils/getYoutubeId';
import { Section, Wrapper } from './styles/VideoTestimonialSlider.styled';

const VideoTestimonialSlider = ({ component }) => {
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const [videoData, setVideoData] = useState({});

  return (
    <Section>
      <VideoModal
        data={videoData}
        videoId={getYoutubeId(videoData?.video?.youtubeUrl)}
        autoplay
        trigger={play}
        setTrigger={setPlay}
      />
      <Header component={component} />
      <Wrapper>
        <Slider ref={sliderRef} {...sliderSettings(setActiveSlideIndex)}>
          {component?.videos?.map(item => (
            <VideoSlide
              key={shortid.generate()}
              component={item}
              play={play}
              setPlay={setPlay}
              setVideoData={setVideoData}
            />
          ))}
        </Slider>
        <Controls
          sliderRef={sliderRef}
          slides={component?.videos}
          activeSlideIndex={activeSlideIndex}
        />
      </Wrapper>
    </Section>
  );
};

export default VideoTestimonialSlider;
