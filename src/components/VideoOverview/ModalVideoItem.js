import React, { useState } from 'react';
import styled from 'styled-components';
import ModalVideo from 'react-modal-video';
import { Image } from 'react-bootstrap';
import Icon from '../../molecules/Icon';

const ModalVideoItem = ({ youtubeId }) => {
  const [play, setPlay] = useState(false);
  return (
    <div className="p-relative">
      <Image
        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
        fluid
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={play}
        videoId={youtubeId}
        onClose={() => setPlay(false)}
      />
      <div>
        <VideoPlayButton onClick={() => setPlay(true)}>
          <Icon
            id="fa-solid fa-play"
            width="24px"
            height="24px"
            fillColor="#007bff"
          />
        </VideoPlayButton>
      </div>
    </div>
  );
};

export default ModalVideoItem;

const VideoPlayButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 98px;
  height: 98px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    background: #0069d9;
    transition: all 0.5s;
  }
`;
