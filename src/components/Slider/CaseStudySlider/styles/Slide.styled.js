import styled from 'styled-components';
import { atMinWidth } from '../../../../atoms/breakpoints';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { shadow } from '../../../../atoms/shadows';
import { variants } from '../../../CallToAction/styles/theme.styled';

export const Frame = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 100%;
  padding: 24px;
  background-image: linear-gradient(
      357.09deg,
      rgba(0, 0, 0, 0.8) 22.51%,
      rgba(0, 0, 0, 0.496) 98.84%
    ),
    url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 500ms;
  border-radius: 12px;
  overflow: hidden;
  margin: 10px 0px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    transition: inherit;
  }
  &:hover::before {
    transform: scale(1.02);
  }
  &:hover {
    ${shadow('xxl', 'dark')}
    .card-cta {
      color: ${color.darkBlue[400]};
      use {
        fill: ${color.darkBlue[400]};
      }
    }
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: max-content;
`;

export const Heading = styled.div`
  ${font('text', 'lg', 900)}
  color: ${color.common.white};
`;

export const Subhead = styled.div`
  ${font('text', 'sm', 400)}
  color: ${color.common.white};
  p {
    margin: 0;
  }
  ${atMinWidth.md`
    ${font('text', 'md', 400)}
  `}
`;

export const CtaStyles = `
  justify-content: flex-start;
  ${atMinWidth.xl`
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${variants.Clickable}
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0px;
  &:hover,
  &:focus {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0px;
  }
`;

export const Tag = styled.div`
  width: max-content;
  ${font('text', 'xs', 800)}
  color: ${color.darkBlue[1000]};
  background: ${color.common.white};
  padding: 4px 12px;
  border-radius: 14px;
`;
