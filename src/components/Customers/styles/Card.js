import styled from 'styled-components';
import { Link } from 'gatsby';

export const Frame = styled.div`
  position: relative;
  top: 0px;
  width: 100%;
  height: auto;
  min-height: 538px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: #f5f6f9;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 2px rgba(10, 16, 34, 0.1);
  &:hover {
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
    .call-to-action {
      &:after {
        right: -24px;
      }
      &:before {
        animation-name: grow-right;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        @keyframes grow-right {
          0% {
            opacity: 0;
            width: 0;
          }
          100% {
            opacity: 1;
            width: 12px;
          }
        }
      }
    }
  }
`;
export const Clickable = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0px;
  z-index: 1;
`;
export const Thumbnail = styled.div`
  width: 100%;
  min-height: 210px;
  max-height: 210px;
  overflow: hidden;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px;
  width: 100%;
  height: 100%;
`;
export const TagsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  .overlay {
    background: rgb(245, 246, 249);
    background: linear-gradient(
      90deg,
      rgba(245, 246, 249, 0.5816701680672269) 0%,
      rgba(245, 246, 249, 1) 100%
    );
    position: absolute;
    top: 0px;
    right: 0px;
    width: 5%;
    height: 100%;
    z-index: 101;
  }
`;
export const Tags = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  overflow: scroll;
  scroll-padding: 0px 20px 0px 0px;
  h6 {
    font-style: normal;
    font-weight: 600;
    font-size: 13.5px;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0px 24px 0px 0px;
    padding: 0px 0px 16px 0px;
    white-space: nowrap;
  }
  h6:first-child {
    color: #007bff;
  }
  h6:nth-child(2) {
    color: #a9acb1;
  }
`;
export const Details = styled.div`
  width: 100%;
  height: auto;
  h5 {
    width: 100%;
    font-style: normal;
    font-weight: bold;
    text-transform: initial;
    font-size: 21.6px;
    line-height: 32px;
    color: #282f3c;
    margin-bottom: 16px;
  }
  p {
    height: auto;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #515667;
    margin-bottom: 16px;
  }
`;
export const CallToAction = styled(Link)`
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #007bff;
  &:hover {
    color: #3395ff;
  }
  &:after {
    position: absolute;
    content: '';
    top: 43%;
    margin: auto;
    right: -16px;
    transform: translateY(-50%) rotate(45deg);
    transform-origin: bottom;
    width: 7px;
    height: 7px;
    border-top: 2px solid #007bff;
    border-right: 2px solid #007bff;
    transition: all 0.3s ease;
  }
  &:before {
    position: absolute;
    content: '';
    top: 43%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
    border-bottom: 2px solid #007bff;
  }
`;
