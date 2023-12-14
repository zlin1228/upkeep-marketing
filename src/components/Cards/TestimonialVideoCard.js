import React, { useState } from 'react';
import VideoModal from '../Modal/VideoModal';
import { getYoutubeId } from '../../utils/getYoutubeId';
import {
  Frame,
  Button,
  Overlay,
  Image,
  Text,
} from '../../styles/Components/Cards/TestimonialVideoCard.styled';

const TestimonialVideoCard = ({ component }) => {
  const [play, setPlay] = useState(false);
  const hasImage = component?.videoThumbnail?.image?.url;
  return (
    <>
      <VideoModal
        data={{
          heading: component?.internalName,
          videoCallToAction: {
            label: 'Schedule a Tour',
            url: '/demo',
          },
        }}
        videoId={getYoutubeId(component?.youtubeUrl)}
        autoplay
        trigger={play}
        setTrigger={setPlay}
      />
      <Frame hasImage={hasImage}>
        <Button aria-label="play" onClick={() => setPlay(true)}>
          {hasImage && (
            <svg
              width="95"
              height="95"
              viewBox="0 0 95 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="47.031" cy="47.1462" r="47.031" fill="#007BFF" />
              <path
                d="M41.0802 64.2557L63.7756 49.9259C65.8001 48.6514 65.8066 45.5099 63.7756 44.2354L41.0802 29.8988C39.2361 28.7345 36.4121 29.8643 36.4121 32.7441V61.4104C36.4121 63.9939 39.0363 65.5508 41.0802 64.2557Z"
                fill="white"
              />
            </svg>
          )}
        </Button>
        <Overlay />
        {hasImage && (
          <Image>
            <img
              src={component?.videoThumbnail?.image?.url}
              alt={component?.internalName}
            />
          </Image>
        )}
        <Text>
          <h6>{component?.internalName}</h6>
        </Text>
      </Frame>
    </>
  );
};

export default TestimonialVideoCard;
