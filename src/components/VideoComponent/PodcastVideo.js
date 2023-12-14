import React, { useState } from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import Icon from '../../molecules/Icon';
import { getYoutubeId } from '../../utils/getYoutubeId';
import { Container, Image, PlayButton } from './styles/PodcastVideo.styled';
import { color } from '../../atoms/colors';

const PodcastVideo = ({ component }) => {
  const [play, setPlay] = useState(false);
  const youtubeId = getYoutubeId(component?.youtubeUrl);
  if (!component) return null;
  return (
    <Container className="podcast-video">
      <Image>
        <GatsbyImage
          classes={!play ? 'active_thumbnail' : 'hide_thumbnail'}
          src={
            component?.videoThumbnail?.image?.gatsbyImageData ||
            `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
          }
          alt={component?.videoThumbnail?.image?.alt}
        />
        <PlayButton
          onClick={() => setPlay(!play)}
          className={!play ? 'active_button' : 'hide_button'}
        >
          <Icon
            id="fa-solid fa-play"
            fillColor={color.darkBlue[1000]}
            width="40px"
            height="40px"
          />
        </PlayButton>
      </Image>
      <iframe
        height="100%"
        width="100%"
        src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=0&autohide=1&showinfo=0&autoplay=${
          play ? 1 : 0
        }`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={
          play ? 'active_iframe featured_video' : 'hidden_iframe featured_video'
        }
      />
    </Container>
  );
};

export default PodcastVideo;
