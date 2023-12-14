import styled from 'styled-components';
import { headingKickerColors } from '../../../utils/colorMappings';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  @media (max-width: 768px) {
    padding: 48px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0px auto;
  padding: 0px 15px;
`;
export const Row = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  &.heading {
    max-width: 770px;
    margin: 0px auto;
    text-align: center;
  }
  &.content {
    flex-direction: row;
    justify-content: space-between;
    padding: 56px 0px;
    @media (max-width: 991px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
export const Details = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 15px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 32px;
  }
  h4 {
    font-size: 25.92px;
  }
  img {
    width: 100%;
    height: auto;
    max-height: 26px;
    margin-bottom: 24px;
  }
  p {
    max-width: 220px;
    font-size: 15px;
    line-height: 22px;
    margin: 0px auto 16px;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  }
  a {
    display: block;
    width: fit-content;
    height: auto;

    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 15px;
    color: #007bff;
    text-align: center;
  }
`;
export const Heading = styled.h2``;
export const HeadingKicker = styled.h5`
  ${props => headingKickerColors[props.color]};
`;
export const Subhead = styled.div`
  p {
    margin-bottom: 0px;
  }
`;
export const StyledSlider = styled.div`
  width: 100%;
  max-width: 840px;
  height: auto;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }

  /* Container */
  .slick-slider {
  }

  /* Slide */
  .slick-slide {
    cursor: grab;
    padding: 0px 6.5px;
  }

  .slick-list {
    width: 100%;
    height: auto;
  }

  /* Dots / Pagination */
  .slick-dots {
    width: 100%;
    height: auto;
    display: flex !important;
    align-items: center;
    justify-content: center;
    list-style: none !important;
    padding: 0px;
    margin: 32px 0px 0px;
    li {
      width: 24px;
      min-width: 24px;
      height: 3px;
      display: flex;
      max-height: 3px;
      align-items: center;
      justify-content: center;
      margin: 0px 8px;
    }
  }

  /* Active Dot / Pagination */
  .slick-dots .slick-active {
    background: #007bff;
  }
`;
export const Dot = styled.button`
  width: 24px;
  height: 3px;
  max-height: 3px;
  outline: none;
  background: rgba(0, 123, 255, 0.15);
  border: none;
  padding: 0px;
  &:hover,
  &:focus {
    outline: none;
    background: rgba(0, 123, 255, 0.15);
    border: none;
  }
`;
export const NextArrow = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  width: fit-content;
  height: 100%;
  height: calc(100% - 35px);
  padding: 0px;
  margin: 0px;
  background: none;
  border: none;
  outline: none;
  color: #707481;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(20px);
  &:hover,
  &:focus {
    outline: none;
    border: none;
    background: none;
    color: #707481;
  }
  svg {
    font-size: 22px;
  }
`;
export const PrevArrow = styled.button`
  position: absolute;
  top: 0px;
  left: 0px;
  width: fit-content;
  height: 100%;
  height: calc(100% - 35px);
  padding: 0px;
  margin: 0px;
  background: none;
  border: none;
  outline: none;
  color: #707481;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-20px);
  &:hover,
  &:focus {
    outline: none;
    border: none;
    background: none;
    color: #707481;
  }
  svg {
    font-size: 22px;
  }
`;
export const SocialProofWrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  height: auto;
  margin: 0px auto;
  padding: 0px 15px;
  text-align: center;
  max-width: 771px;
`;
