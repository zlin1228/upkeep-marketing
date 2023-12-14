import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 970px;
  height: 100%;
  max-height: 544px;
  position: relative;
  margin: 0px auto;
  padding: 50px 15px;
  .modal-video {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0px 30px;
  }
  .modal-video-close-btn {
    background: transparent;
  }
  .modal-video-close-btn:before,
  .modal-video-close-btn:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 50%;
    top: 50%;
    left: 13px;
    margin-top: -1px;
    background: #fff;
    border-radius: 5px;
    margin-top: -2px;
  }
`;
export const Thumbnail = styled.div`
  position: relative;
  inset: 0px;
  width: 100%;
  height: auto;
  max-width: 970px;
  max-height: 544px;
  overflow: hidden;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 991px) {
    max-height: 444px;
  }
  @media (max-width: 768px) {
    max-height: 344px;
  }
  @media (max-width: 640px) {
    max-height: 244px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Button = styled.button`
  position: absolute;
  inset: 0px;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: 32px;
  &:hover {
    background: transparent;
  }
  &:focus {
    outline: none;
  }
`;
