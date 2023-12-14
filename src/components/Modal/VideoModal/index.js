import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../molecules/Icon';
import GatsbyImage from '../../Image/GatsbyImage';
import LiteYoutube from '../../Lite-Youtube/LiteYoutube';
import {
  Container,
  Overlay,
  Wrapper,
  Exit,
  Video,
  Content,
  Details,
  Logo,
  Heading,
  Subhead,
  CallToAction,
} from './styles/VideoModal.styled';

const VideoModal = ({ data, videoId, autoplay, trigger, setTrigger }) => {
  const firstRender = useRef(true);
  const [modal, setModal] = useState('');

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (trigger) {
      if (typeof document !== `undefined`) {
        document.body.style.overflow = 'hidden';
      }
      setModal('visible');
    } else {
      if (typeof document !== `undefined`) {
        document.body.style.overflow = 'auto';
      }
      setModal('hidden');
    }
  }, [trigger]);

  return (
    <Container className={modal}>
      <Overlay
        type="button"
        aria-label="Close Video Popup"
        onClick={() => setTrigger(!trigger)}
      />
      <Wrapper className={modal}>
        <Exit
          type="button"
          aria-label="Close Video Popup"
          onClick={() => setTrigger(!trigger)}
        >
          <Icon id="fa-solid fa-xmark" fillColor="#ffffff" />
        </Exit>
        <Video>
          {modal === 'visible' && (
            <LiteYoutube autoplay={autoplay} videoId={videoId} />
          )}
        </Video>
        <Content>
          <Details>
            {data?.logo && (
              <Logo>
                <GatsbyImage
                  src={data?.logo?.image?.url}
                  alt={data?.logo?.image?.alt}
                />
              </Logo>
            )}
            {data?.heading && (
              <Heading dangerouslySetInnerHTML={{ __html: data?.heading }} />
            )}
            {data?.subhead && <Subhead>{data?.subhead}</Subhead>}
          </Details>
          {data?.videoCallToAction?.url && (
            <CallToAction to={data?.videoCallToAction?.url}>
              {data?.videoCallToAction?.label}
            </CallToAction>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default VideoModal;
