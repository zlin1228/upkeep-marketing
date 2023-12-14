import React, { useState } from 'react';
import Header from './components/Header';
import VideoTestimonial from './components/VideoTestimonial';
import VideoModal from '../Modal/VideoModal';
import { getYoutubeId } from '../../utils/getYoutubeId';
import { Section, Wrapper, Container } from './styles/TestimonialVideo.styled';

const TestimonialVideo = ({ component }) => {
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
      <Wrapper>
        <Header component={component} />
        <Container>
          {component?.videoTestimonial?.map(video => (
            <VideoTestimonial
              key={video?.id}
              component={video}
              play={play}
              setPlay={setPlay}
              setVideoData={setVideoData}
            />
          ))}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default TestimonialVideo;
