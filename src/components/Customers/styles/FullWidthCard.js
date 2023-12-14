import styled from 'styled-components';
import { Link } from 'gatsby';

export const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: auto;
  min-height: 432px;
  margin-bottom: 48px;
  gap: 0px 15px;
  padding: 32px 0px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  &:hover {
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
  inset: 0px;
  position: absolute;
  z-index: 100;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  min-width: 301px;
  max-width: 301px;
  height: 100%;
  min-height: 432px;
  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
    margin-bottom: 32px;
  }
`;
export const Details = styled.div`
  width: 100%;
  height: 100%;
  h4 {
    width: 100%;
    height: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 25.92px;
    line-height: 32px;
    color: #0b1a2b;
    margin-bottom: 16px;
  }
  p {
    width: 100%;
    height: auto;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #0b1a2b;
    margin-bottom: 16px;
  }
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
export const CardMeta = styled.div`
  width: 100%;
  height: auto;
  width: 100%;
  height: auto;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #0b1a2b;
  svg {
    color: #66b0ff;
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }
  div {
    margin-bottom: 8px;
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
export const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 770px;
  height: 100%;
  min-height: 432px;
  max-height: 432px;
  background: #c4c4c4;
  border-radius: 8px;
  margin-bottom: 32px;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    min-height: 432px;
  }
  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 264px;
    max-height: 264px;
  }
`;
