import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { spacing } from '../../../../atoms/spacing';
import { atMinWidth } from '../../../../atoms/breakpoints';
import Check from '../assets/check-circle.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  opacity: 0;
  transition: opacity 800ms ease-in;
  ${({ id, animateSlide }) => id === animateSlide && 'opacity: 1;'}
`;

export const HeadingKicker = styled.p`
  ${font('overline', 'lg', '700')}
  color: ${color.steel[700]};
`;

export const Heading = styled.h2`
  ${font('display', 'sm', '700')}
  color: ${color.darkBlue[1000]};
  ${atMinWidth.lg`
    ${font('display', 'md', '700')}
  `}
`;

export const Subheading = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  color: ${color.darkBlue[600]};
  ul {
    list-style-type: none;
    list-style-position: inside;
  }
  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
  ul ul,
  ol ul {
    list-style-type: circle;
    list-style-position: inside;
    margin-left: ${spacing[16]};
  }
  li {
    background-image: url(${Check});
    background-repeat: no-repeat;
    padding-left: ${spacing[32]};
    padding-bottom: ${spacing[12]};
  }
  p,
  li,
  a {
    ${font('text', 'lg', '400')}
  }
  strong {
    font-weight: bolder;
  }
`;

export const ButtonStyles = `
  width: max-content;
`;
