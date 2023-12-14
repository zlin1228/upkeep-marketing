import React, { useState } from 'react';
import GatsbyImage from '../../components/Image/GatsbyImage';
import VideoModal from '../../components/Modal/VideoModal';
import { getYoutubeId } from '../../utils/getYoutubeId';
import useSwipe from '../../hooks/useSwipe';
import PlaySvg from './assets/play-icon.svg';
import { Container, Thumbnail, PlayIcon, Iframe } from './styles/index.styled';

const InlineVideo = ({
  youtubeURL,
  thumbnail,
  openInModal,
  modalData,
  onChange,
  customPlayState,
  setCustomPlayState,
}) => {
  const { handleClick, handleMouseDown } = useSwipe();
  const [play, setPlay] = useState(false);

  if (!youtubeURL) return null;
  const youtubeId = getYoutubeId(youtubeURL);

  return (
    <>
      {openInModal && (
        <VideoModal
          data={modalData}
          videoId={youtubeId}
          trigger={customPlayState || play}
          setTrigger={setCustomPlayState || setPlay}
          autoplay
        />
      )}
      <Container className="inline-video">
        {thumbnail && (
          <Thumbnail
            className={customPlayState || play ? 'hidden' : 'visible'}
            onMouseDown={e => handleMouseDown(e)}
            onClick={e => handleClick(e, null, onChange && onChange)}
          >
            <PlayIcon className="play-icon">
              <img src={PlaySvg} alt="Play Icon" loading="lazy" />
            </PlayIcon>
            <GatsbyImage src={thumbnail} alt="Video Thumbnail" />
          </Thumbnail>
        )}
        {youtubeId && !openInModal && (customPlayState || play) && (
          <Iframe
            height="100%"
            width="100%"
            src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=0&autohide=1&showinfo=0&autoplay=${
              customPlayState || play ? 1 : 0
            }`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={customPlayState || play ? 'visible' : 'hidden'}
          />
        )}
      </Container>
    </>
  );
};

export default InlineVideo;
