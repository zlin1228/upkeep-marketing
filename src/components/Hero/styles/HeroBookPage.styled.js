import styled from 'styled-components';

import BackgroundXl from '../assets/book-page-bg-xl.png';
import BackgroundLg from '../assets/book-page-bg-lg.png';
import BackgroundMd from '../assets/book-page-bg-md.png';
import BackgroundSm from '../assets/book-page-bg-sm.png';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { shadow } from '../../../atoms/shadows';
import { atMinWidth } from '../../../atoms/breakpoints';
import {
  defaultStyles,
  variants,
  sizes,
} from '../../CallToAction/styles/CallToAction.styled';

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding-top: 124px;
  ${atMinWidth.xl`
    padding-top: 124px;
  `}
`;
export const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundSm});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: #f5f6f9;
  z-index: -1;
  ${atMinWidth.sm`
    background-image: url(${BackgroundMd});
    background-size: 100% 80%;
  `}
  ${atMinWidth.md`
    background-image: url(${BackgroundLg});
  `}
  ${atMinWidth.xl`
    background-image: url(${BackgroundXl});
    // background-size: 200% 115%;
    background-size: 100% 100%;
  `}
`;
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 0px auto;
  padding: 0px 23.5px;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1270px;
    flex-direction: row;
    gap: 48px;
    padding: 48px 35px 96px;
  `}
`;
export const Text = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  ${atMinWidth.xl`
    max-width: 570px;
    align-items: flex-start;
    text-align: left;
  `}
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.common.white};
    ${atMinWidth.md`
      ${font('display', 'md', '700')}
    `}
    ${atMinWidth.xl`
      ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    display: flex;
    flex-direction: column;
    gap: 16px;
    ${font('text', 'md', '400')}
    color: ${color.common.white};
    ${atMinWidth.md`
      ${font('text', 'lg', '400')}
    `}
    p,
    em,
    span {
      ${font('text', 'md', '400')}
      color: ${color.common.white};
      ${atMinWidth.md`
        ${font('text', 'lg', '400')}
      `}
    }
  }
`;
export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  a,
  button {
    width: 100%;
  }
  ${atMinWidth.md`
    width: fit-content;
    flex-direction: row;
    a,
    button {
      width: auto;
    }
  `}
`;
export const Button = styled.button`
  ${defaultStyles}
  ${sizes.xxl}
  ${variants['Red-Light']}
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
    background: ${color.common.white};
    color: ${color.primary[700]};
    ${shadow('xs', 'dark')};
  }
`;
export const Content = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0px auto;
  ${atMinWidth.xl`
    max-width: 640px;
    height: 100%;
    position: absolute;
    right: 0px;
    top: 0px; 
    && .gatsby-image-wrapper {
      overflow: visible;
    }
    && img {
      top: 48px;
    }
  `}
  && img {
    object-fit: cover;
  }
`;
