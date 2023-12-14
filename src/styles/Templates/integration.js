import styled from 'styled-components';

import { spacing } from '../../atoms/spacing';
import { containers } from '../../atoms/containers';
import { atMinWidth } from '../../atoms/breakpoints';
import { font, richTextStyles } from '../../atoms/typography';
import { color } from '../../atoms/colors';
import { shadow } from '../../atoms/shadows';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[96]} ${spacing[0]} ${spacing[0]};
  ${atMinWidth.xl`
    padding: ${spacing[128]} ${spacing[0]} ${spacing[32]};
  `}
`;
export const OuterWrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;
export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: 1fr 370px;
    gap: 100px;
  `}
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  .heading {
    ${font('display', 'md', '700')};
    color: ${color.darkBlue[1000]};
    ${atMinWidth.md`
      ${font('display', 'lg', '700')};
    `}
  }
  .rich-text {
    ${richTextStyles}
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
export const Sidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
`;
export const Image = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: ${spacing[32]};
  ${shadow('xl', 'dark')}
  border: 1px solid ${color.darkBlue[50]};
  && .gatsby-image-wrapper {
    width: 100%;
    max-height: 128px;
    img {
      object-fit: contain !important;
    }
  }
`;
