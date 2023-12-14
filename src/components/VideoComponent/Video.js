import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Icon from '../../molecules/Icon';
import GatsbyImage from '../Image/GatsbyImage';
import { getYoutubeId } from '../../utils/getYoutubeId';
import { Container, Thumbnail, Button } from './styles/Video';

const Video = ({ thumbnail, youtubeURL }) => {
  const [isOpen, setOpen] = useState(false);
  if (!youtubeURL) return null;
  return (
    <Container>
      <Thumbnail>
        <GatsbyImage src={thumbnail} alt="Video Alt" />
        <Button type="button" onClick={() => setOpen(true)}>
          <Icon
            id="fa-solid fa-play"
            fillColor="#007bff"
            width="25px"
            height="25px"
          />
        </Button>
      </Thumbnail>
      <ModalVideo
        channel="youtube"
        autoplay
        allowFullScreen
        isOpen={isOpen}
        videoId={getYoutubeId(youtubeURL)}
        onClose={() => setOpen(false)}
      />
    </Container>
  );
};

export default Video;
