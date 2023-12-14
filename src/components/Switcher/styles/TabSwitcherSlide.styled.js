import styled, { css } from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Wrapper = styled.div`
  display: ${({ index, activeIndex }) =>
    index === activeIndex ? 'flex' : 'none'};
  flex-direction: column;
  gap: ${spacing[32]};
  width: 100%;
  ${atMinWidth.xl`
    flex-direction: row;
 `};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  ${atMinWidth.xl`
    max-width: 592px;
  `};
`;

export const Kicker = styled.p`
  ${font('overline', 'md', '700')}
  color: ${color.darkBlue[1000]};
`;

export const Heading = styled.p`
  ${font('display', 'sm', '700')}
  color: ${color.darkBlue[1000]};
  ${atMinWidth.lg`
     ${font('display', 'md', '700')}
  `};
`;

export const Subheading = styled.p`
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
  ${atMinWidth.xl`
     ${font('text', 'lg', '400')}
  `};
`;

export const ButtonStyles = css`
  ${atMinWidth.lg`
    width: fit-content;
  `};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;
