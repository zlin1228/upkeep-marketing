import styled from 'styled-components';
import { Link } from 'gatsby';

export const Card = styled.div`
  position: relative;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  min-height: 471px;
  overflow: hidden;
  border-radius: 12px;
  transition: all 0.3s ease;
  &:hover {
    top: -28px;
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
    .call_to_action {
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
  top: 0px;
  z-index: 100;
`;
export const Thumbnail = styled.div`
  width: 100%;
  min-height: 208px;
  max-height: 208px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  width: 100%;
  height: 263px;
  background: #121212;

  h5.title {
    font-style: normal;
    font-weight: bold;
    font-size: 21.6px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 16px;
    text-transform: initial;
  }

  p.price_details {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #e6f2ff;
    margin-bottom: 16px;
  }

  p.description {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
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
