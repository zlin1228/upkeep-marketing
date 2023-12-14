import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

const themes = {
  background: {
    White: `background: ${color.common.white}; border: 1px solid #e0e6ed;`,
    'Light Gray': `background: #F5F6F9; border: 1px solid #e0e6ed;`,
    Dark: `background: #131313; border: none;`,
  },
  heading: {
    White: `color: ${color.darkBlue[900]};`,
    'Light Gray': `color: ${color.darkBlue[900]};`,
    Dark: `color: ${color.common.white};`,
  },
  subhead: {
    White: `color: ${color.darkBlue[700]};`,
    'Light Gray': `color: ${color.darkBlue[700]};`,
    Dark: `color: #eaeaec;`,
  },
};
export const Container = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 16px;
  background: ${color.common.white};
  border: 1px solid #eceef6;
  box-shadow: 0px 12px 32px rgba(45, 40, 77, 0.1);
  border-radius: 8px;
  overflow: hidden;
  ${props => themes?.background[props?.theme]}
  .clickable {
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: none;
    outline: none;
    border: none;
  }
  @media (max-width: 499px) {
    margin: 8px;
  }
`;
export const Thumbnail = styled.div`
  width: 100%;
  height: auto;
  max-height: 209px;
  min-height: 209px;
  background: #e4e7ec;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover !important;
  }
  .gatsby-image-wrapper {
    img {
      width: 100%;
      height: auto;
      object-fit: cover !important;
    }
  }
  @media (max-width: 499px) {
    max-height: 180px;
    min-height: 180px;
  }
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Text = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .heading-kicker {
    ${font('overline', 'lg', '600')}
    color: ${color.darkBlue[300]};
    margin: 0px;
  }
  h3 {
    ${font('display', 'xs', '700')}
    ${props => themes?.heading[props?.theme]}
    margin-bottom: 0px;
  }
  .subhead,
  .subhead p {
    ${font('text', 'md', '400')}
    ${props => themes?.subhead[props?.theme]}
    margin: 0px;
  }
`;
