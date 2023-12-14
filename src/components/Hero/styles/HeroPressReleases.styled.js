import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

import { sizes } from '../../CallToAction/styles/CallToAction.styled';

import BackgroundImage from '../assets/press-releases-bg.png';

export const Section = styled.div`
  width: 100%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  padding: 124px 0px;
  ${atMinWidth.xl`
    padding: 124px 0px 148px;
  `}
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px 23.5px;
  margin: 0px auto;
  ${atMinWidth.sm`
        padding: 0px 35px;
    `}
  ${atMinWidth.xl`
        max-width: 1240px;
    `}
`;
export const Text = styled.div`
  width: 100%;
  max-width: 970px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  margin: 0px auto;
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.common.white};
    ${atMinWidth.sm`
        ${font('display', 'md', '700')}
    `}
    ${atMinWidth.xl`
        ${font('display', 'lg', '700')}
    `}
  }
  .subhead,
  .subhead p {
    ${font('text', 'md', '400')}
    color: ${color.common.white};
    ${atMinWidth.xl`
        ${font('text', 'lg', '400')}
    `}
  }
`;
export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 16px;
  a {
    width: 100%;
  }
  ${atMinWidth.md`
    flex-direction: row;
    gap: 30px;
      a {
        width: auto;
      }
  `}
`;
