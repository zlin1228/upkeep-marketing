import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import InlineVideo from '../../molecules/InlineVideo';
import HeadingComponent from '../HeadingComponent/HeadingComponent';

import useParallaxEffect from '../../hooks/useParallaxEffect';

import {
  Section,
  Wrapper,
  Slide,
  SlideContainer,
  SlideWrapper,
  Text,
  BackgroundImage,
} from './styles/index.styled';

const VideoTestimonial = ({ component }) => {
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);
  const [activeVideo, setActiveVideo] = useState(null);

  if (!component) return null;
  const {
    backgroundColor,
    headingKicker,
    heading,
    subhead,
    primaryButton,
    secondaryButton,
    videos,
  } = component;

  return (
    <Section backgroundColor={backgroundColor || 'White'}>
      <BackgroundImage
        ref={backgroundRef}
        className="background-image"
        loading="eager"
      />
      <Wrapper>
        <HeadingComponent
          theme="light"
          headingKicker={headingKicker}
          heading={heading}
          subhead={subhead}
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
        />
        <Slider
          {...{
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
          }}
        >
          {videos.map(item => (
            <Slide key={item?.id}>
              <SlideContainer>
                <SlideWrapper>
                  {item?.video?.youtubeUrl && (
                    <InlineVideo
                      youtubeURL={item?.video?.youtubeUrl}
                      thumbnail={item?.video?.videoThumbnail?.image?.url}
                      customPlayState={activeVideo === item?.id}
                      onChange={() => setActiveVideo(item?.id)}
                    />
                  )}
                  <Text>
                    {item?.heading && <p className="heading">{item.heading}</p>}
                    {item?.subhead && <p className="subhead">{item.subhead}</p>}
                  </Text>
                </SlideWrapper>
              </SlideContainer>
            </Slide>
          ))}
        </Slider>
      </Wrapper>
    </Section>
  );
};

export default VideoTestimonial;
