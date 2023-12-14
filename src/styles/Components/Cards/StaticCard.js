import styled from 'styled-components';
import { Link } from 'gatsby';

export const Frame = styled.div`
  position: relative;
  transition: all 0.3s ease;
  width: 100%;
  height: auto;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
    .animated-cta {
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
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
`;
export const Thumbnail = styled.div`
  width: 100%;
  height: auto;
  min-height: 207px;
  max-height: 207px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Body = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Heading = styled.h5`
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 21.6px;
  line-height: 32px;
  color: #282f3c;
  margin-bottom: 16px;
  text-transform: initial;
`;
export const Subhead = styled.div`
  width: 100%;
  height: auto;

  font-style: normal;
  font-weight: normal;
  font-size: 16.2px;
  line-height: 24px;
  color: #515667;
  margin-bottom: 16px;
`;
export const CallToAction = styled(Link)`
  position: relative;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  color: #007bff;
  &:hover {
    color: #3395ff;
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
    border-top: 2px solid #3395ff;
    border-right: 2px solid #3395ff;
    transition: all 0.3s ease;
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
    border-bottom: 2px solid #3395ff;
  }
`;
