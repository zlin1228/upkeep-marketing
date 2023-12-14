import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 64px 0px;
  overflow: hidden;
  ${atMinWidth.md`
    padding: 64px 0px 96px;
  `}
`;
export const Header = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 24px;
  padding: 0px 15px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1040px;
  `}
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    ${atMinWidth.md`
        ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[700]};
    p {
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[700]};
    }
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px 15px;
  margin: 0px auto;
  overflow: visible;
  ${atMinWidth.xs`
    gap: 64px;
  `}
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
  .slick-list {
    overflow: hidden;
    margin-right: -30px;
    ${atMinWidth.sm`
        margin-right: 0px;
    `}
    ${atMinWidth.sm`
        overflow: visible;
    `}
  }
  .slick-track {
    display: flex !important;
    ${atMinWidth.sm`
        gap: 30px;
    `}
  }
  .slick-slide {
    width: 470px;
    height: inherit !important;
  }
  .slick-slide > div {
    height: 100%;
    margin-right: 30px;
    ${atMinWidth.sm`
        margin-right: 0px;
    `}
  }
`;
export const Controls = styled.div`
  width: fit-content;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
export const Dot = styled.button`
  width: 8px;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${color.common.transparent};
  outline: none;
  padding: 0px;
  margin: 0px;
  svg circle {
    transition: all 250ms ease-in-out;
  }
  &:hover,
  &:focus,
  &.active {
    border: none;
    background: ${color.common.transparent};
    outline: none;
    svg circle {
      fill: ${color.darkBlue[900]};
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  display: none;
  position: relative;
  background: none;
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  border-radius: 9999px;
  transition: all 250ms ease-in-out;
  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    z-index: -1;
    transition: all 250ms ease-in-out;
  }
  &:hover,
  &:focus {
    background: none;
    outline: none;
    border: none;
    &::before {
      background: ${color.darkBlue[900]};
    }
    svg path {
      background: ${color.darkBlue[900]};
      fill: ${color.common.white};
      z-index: 100;
    }
  }
  ${atMinWidth.sm`
     display: block;
  `}
`;
