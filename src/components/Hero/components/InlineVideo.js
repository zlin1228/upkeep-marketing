import React from 'react';
import VideoModal from '../../Modal/VideoModal';
import GatsbyImage from '../../Image/GatsbyImage';
import { Container, ButtonOverlay, Button } from '../styles/InlineVideo';

const InlineVideo = ({ data, videoId, play, setPlay }) => (
  <>
    <VideoModal
      data={data}
      videoId={videoId}
      trigger={play}
      setTrigger={setPlay}
      autoplay
    />
    <Container>
      <GatsbyImage src={data?.video?.videoThumbnail?.image?.gatsbyImageData} />
      <ButtonOverlay onClick={() => setPlay(true)}>
        <Button className="play-button">
          <svg
            width="30"
            height="35"
            viewBox="0 0 30 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.11535 34.4166L27.5545 20.2487C29.5562 18.9885 29.5626 15.8825 27.5545 14.6224L5.11535 0.447602C3.29213 -0.703503 0.5 0.413545 0.5 3.26081V31.6035C0.5 34.1578 3.09454 35.6972 5.11535 34.4166Z"
              fill="white"
            />
          </svg>
        </Button>
      </ButtonOverlay>
    </Container>
  </>
);

export default InlineVideo;
