import { Link } from 'gatsby';
import styled from 'styled-components';

export const Frame = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  top: 0px;
  display: flex;
  flex-direction: column;
  background: #f5f6f9;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  border: 1px solid rgb(224, 230, 237);
  background: rgb(255, 255, 255);
  box-shadow: rgb(10 16 34 / 10%) 0px 2px 2px;
  &:hover {
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
    .card-call-to-action {
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
export const LinkOverlay = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0px;
  z-index: 100;
`;
export const Head = styled.div`
  width: 100%;
  height: auto;
`;
export const Thumbnail = styled.div`
  width: 100%;
  max-height: 210px;
  overflow: hidden;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
export const Details = styled.div`
  width: 100%;
  height: 100%;
`;
export const TagsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  z-index: 101;
`;
export const TagsOverlay = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.5816701680672269) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  position: absolute;
  top: 0px;
  right: 0px;
  width: 5%;
  height: 100%;
  z-index: 101;
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
export const Heading = styled.h4`
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 21.6px;
  line-height: 32px;
  padding: 0px;
  margin: 0px 0px 16px 0px;
  color: #282f3c;
`;
export const Subhead = styled.div`
  width: 100%;
  height: auto;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #515667;
`;
export const CallToAction = styled(Link)`
  width: fit-content;
  height: auto;
  position: relative;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #007bff;
  margin-top: 16px;
  &:hover {
    color: #3395ff;
  }
  &:after {
    position: absolute;
    content: '';
    top: 50%;
    margin: auto;
    right: -16px;
    transform: translateY(-50%) rotate(45deg);
    transform-origin: bottom;
    width: 6px;
    height: 6px;
    border-top: 2px solid #007bff;
    border-right: 2px solid #007bff;
    transition: all 0.3s ease;
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
    border-bottom: 2px solid #007bff;
  }
`;
