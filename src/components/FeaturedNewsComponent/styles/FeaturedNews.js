import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  background-color: #f5f6f9;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0px auto;
  display: grid;
  grid-template-areas:
    'header header'
    '. slider'
    'controls controls';
  grid-template-columns: 15.5vw 1fr;
  grid-auto-rows: auto;
  overflow: hidden;
  @media (max-width: 1200px) {
    grid-template-columns: 11vw 1fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 6vw 1fr;
  }
  @media (max-width: 375px) {
    grid-template-columns: 4vw 1fr;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  grid-area: header;
  width: 100%;
  max-width: 84.5vw;
  height: auto;
  padding: 0px 15.75vw 0 0px;
  margin: 15px 0px 32px auto;
  @media (max-width: 1200px) {
    max-width: 89vw;
  }
  @media (max-width: 576px) {
    grid-template-columns: 94vw 1fr;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 375px) {
    grid-template-columns: 96vw 1fr;
  }
`;
export const Heading = styled.h4`
  ${font('display', 'md', '700')}
  color: ${color.darkBlue[900]};
  text-align: left;
  margin-bottom: 15px;
`;
export const Slider = styled.div`
  z-index: 1;
  grid-area: slider;
  width: 100%;
  max-width: 84.5vw;
  height: auto;
  margin-left: auto;
  overflow: visible;
  .slick-slide {
    padding-right: 30px;
  }
  @media (max-width: 1200px) {
    max-width: 89vw;
  }
  @media (max-width: 576px) {
    grid-template-columns: 94vw 1fr;
  }
  @media (max-width: 375px) {
    grid-template-columns: 96vw 1fr;
  }
  .slick-track {
    display: flex !important;
  }
  .slick-slide > div {
    height: 100%;
  }
  .slick-slide {
    height: inherit !important;
  }
  .slick-list {
    overflow: visible;
  }
`;
