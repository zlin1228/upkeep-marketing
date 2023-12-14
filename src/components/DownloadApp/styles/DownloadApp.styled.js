import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

import xlBg from '../assets/Desktop.png';
import mdBg from '../assets/Tablet.png';
import smBg from '../assets/Mobile.png';

export const Section = styled.section`
  width: 100%;
  background: ${color.mediumGrey[25]};
  padding: 48px 30px 288px 30px;
  ${atMinWidth.md`
    padding: 64px 30px 288px 30px;
  `};
  ${atMinWidth.xl`
    padding: 96px 30px;
  `};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 288px;
  gap: 40px;
  width: 100%;
  height: 100%;
  max-width: 566px;
  margin: 0px auto;
  border-radius: 24px;
  padding: 32px;
  background: url(${smBg});
  background-size: cover;
  ${atMinWidth.sm`
    padding: 64px;
    
  `};
  ${atMinWidth.lg`
      max-width: 830px;
      grid-template-rows: 1fr 288px;
      background: url(${mdBg});
      background-size: cover;
  `};
  ${atMinWidth.xl`
    max-width: 1230px;
    padding: 50px 64px;
    grid-template-rows: unset;
    grid-template-columns: 1fr 1fr;
    background: url(${xlBg});
    background-size: cover;
  `};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 24px;
  p {
    margin-bottom: 0px;
  }
  ${atMinWidth.xl`
    justify-content: flex-start;
    text-align: left;
  `};
`;

export const Downloads = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  ${atMinWidth.sm`
    flex-direction: row;
  `}
  ${atMinWidth.xl`
    justify-content: flex-start;
  `};
`;

export const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  ${atMinWidth.sm`
    flex-direction: row;
  `}
  p {
    ${font('text', 'md', '700')};
    color: ${color.common.white};
    margin-bottom: 0px;
  }
  a {
    ${font('text', 'md', '600')};
  }
  ${atMinWidth.xl`
    justify-content: flex-start;
  `};
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  ${atMinWidth.sm`
    height: unset;
    width: unset;
  `}
  ${atMinWidth.xl`
   position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  `};
`;

export const Heading = styled.h2`
  ${font('display', 'sm', '700')};
  color: ${color.common.white};
  ${atMinWidth.sm`
     ${font('display', 'md', '700')};
  `};
  ${atMinWidth.lg`
     ${font('display', 'lg', '700')};
     line-height: 44px;
  `};
`;

export const Subhead = styled.div`
  ${font('text', 'lg', '400')};
  color: ${color.common.white};
`;
