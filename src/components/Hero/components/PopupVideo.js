import React from 'react';
import styled from 'styled-components';
import ModalVideo from 'react-modal-video';
import { FaCaretRight } from 'react-icons/fa';

const PopupVideo = props => (
  <StyledPopupVideo className="p-relative" align={props?.align}>
    <ModalVideo
      channel="youtube"
      isOpen={props.playPopUpVideo}
      videoId={props.popupYoutubeId}
      onClose={() => props.setPlayPopUpVideo(false)}
      youtube={{
        autoplay: 1,
        mute: 1,
      }}
    />
    <div>
      <PopupVideoLink onClick={() => props.setPlayPopUpVideo(true)}>
        <FaCaretRight size="1em" />
        <button type="button" className="popup_link">
          See how it works
        </button>
      </PopupVideoLink>
    </div>
  </StyledPopupVideo>
);

export default PopupVideo;

export const PopupVideoLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.theme !== 'Light' ? '#fff;' : '#33394B;')};
  .popup_link {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    position: relative;
    background: none;
    border: none;
    padding: 0;
    outline: none;
    margin: 0.5rem 0rem 0.5rem 0.5rem;
  }
`;
export const StyledPopupVideo = styled.div`
  ${props =>
    props.align === 'center' ? `display: flex; justify-content: center;` : ``}
  button {
    padding: 0 !important;
    &:hover {
      background: transparent !important;
    }
  }
`;
