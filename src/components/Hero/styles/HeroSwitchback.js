import styled from 'styled-components';
import { Link } from 'gatsby';
import { Col } from 'react-bootstrap';
import {
  backgroundColors,
  borderAfterColors,
  borderBeforeColors,
  headingColors,
  subheadColors,
  textColor,
} from '../utils/colorMappings';

export const HeroContainer = styled.div`
  padding-top: 120px;
  ${props => backgroundColors[props?.theme]}
  @media (max-width: 991px) {
    padding-top: 120px;
  }
`;
export const BreadcrumbsWrapper = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  .breadcrumbs_container {
    max-width: 100% !important;
    padding: 0px !important;
  }
  @media (max-width: 1200px) {
    padding: 0px 15px;
  }
  @media (max-width: 991px) {
    padding: 0px 15px;
  }
`;
export const HeroWrapper = styled.div`
  padding: 30px 0px 100px;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 30px 15px 100px 15px;
  }
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 15px;
  }
  .scrollLink-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    position: static;
    width: auto;
    height: 48px;
    background: #007bff;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    opacity: 1;
    &:hover {
      color: #ffffff;
      opacity: 0.75;
    }
    @media (max-width: 500px) {
      font-size: 14px;
      line-height: 14px;
      width: auto;
      padding: 12px 20px;
      margin-right: 8px;
    }
  }
  .scrollLink-link {
    padding-top: 16px;
    position: relative;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    ${props => textColor[props?.theme]}
    width: auto;
    opacity: 1;
    &:hover {
      ${props => textColor[props?.theme]}
      opacity: 0.6;
    }
    @media (max-width: 600px) {
      font-size: 14px;
      line-height: 20px;
      width: auto;
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
      ${props => borderAfterColors[props?.theme]}
      transition: all 0.3s ease;
    }
    &:before {
      position: absolute;
      content: '';
      top: 50%;
      left: calc(100% + 13px);
      width: 0;
      opacity: 0;
      ${props => borderBeforeColors[props?.theme]}
    }
    &:hover {
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
export const Info = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  ${props => (props.reverse ? 'order: 1;' : 'order: 2;')}
  ${props => (props.center ? 'align-items: center; text-align: center;' : '')}
  @media (max-width: 991px) {
    padding-left: 0px;
    margin-bottom: 16px;
    order: 1;
  }
  .cta_wrapper {
    max-height: 48px;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
export const HeadingKicker = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #007bff;
  margin-bottom: 0px;
`;
export const Heading = styled.h1`
  max-width: 770px;
  font-style: normal;
  font-weight: bold;
  font-size: 31.1px;
  line-height: 126.5%;
  ${props => headingColors[props?.theme]}
  margin: 16px 0px;
`;
export const Subhead = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  ${props => subheadColors[props?.theme]}
  margin-bottom: 16px;
  max-width: 470px;
  margin-bottom: 24px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
export const CallToAction = styled(Link)`
  position: relative;
  font-size: 15px;
  line-height: 20px;
  ${props => textColor[props?.theme]}
  width: auto;
  opacity: 1;
  &:hover {
    ${props => textColor[props?.theme]}
    opacity: 0.6;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
    width: auto;
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
    ${props => borderAfterColors[props?.theme]}
    transition: all 0.3s ease;
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
    ${props => borderBeforeColors[props?.theme]}
  }
  &:hover {
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
`;
export const DemoButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  position: static;
  width: auto;
  height: 48px;
  background: #007bff;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  opacity: 1;
  margin-right: 48px;
  &:hover {
    color: #ffffff;
    opacity: 0.75;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 14px;
    width: auto;
    padding: 12px 20px;
    margin-right: 8px;
  }
`;
