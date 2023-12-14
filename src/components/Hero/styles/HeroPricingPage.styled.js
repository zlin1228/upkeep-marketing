import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';

import { backgroundImages } from '../../../atoms/backgroundImage';

export const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  padding: ${spacing[76]} ${spacing[0]} ${spacing[48]};
  overflow: hidden;
  border-bottom: 5px solid
    radial-gradient(
      ellipse farthest-corner at center center,
      #007cb0 24%,
      transparent 73%
    );
  background: radial-gradient(
      65.09% 39.86% at 51.46% 88.44%,
      rgba(39, 73, 107, 0.05) 0%,
      rgba(18, 58, 94, 0) 100%
    ),
    radial-gradient(
      37.97% 32.86% at 51.74% 98.01%,
      rgba(141, 208, 255, 0.15) 0%,
      rgba(242, 246, 252, 0.15) 100%
    ),
    radial-gradient(
      62.43% 62.43% at 50% 117.27%,
      rgba(187, 226, 255, 0.09) 0%,
      rgba(0, 124, 176, 0.09) 30.21%,
      rgba(0, 142, 193, 0.09) 55.73%,
      rgba(240, 248, 250, 0.09) 100%
    ),
    linear-gradient(180deg, #fff 0%, #f7faff 100%);
  background-blend-mode: normal, normal, normal, soft-light, normal;

  ${atMinWidth.md`
    gap: ${spacing[48]};
    padding: ${spacing[92]} ${spacing[0]} ${spacing[72]};
  `}

  ${atMinWidth.xl`
    padding: ${spacing[112]} ${spacing[0]} ${spacing[96]};
  `}

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5px;
    background: radial-gradient(
      ellipse farthest-corner at center center,
      #007cb0 24%,
      transparent 76%
    );
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImages.grid.desktop});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};

  ${atMinWidth.md`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
    gap: ${spacing[32]};
  `}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
`;

export const Text = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[24]};
  margin: ${spacing[0]} auto;
  text-align: center;

  ${atMinWidth.xl`
    gap: ${spacing[36]};
  `}

  .eyebrow {
    ${font('overline', 'lg', '700')}
    color: ${color.steel[700]};
  }

  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[1000]};

    ${atMinWidth.md`
      ${font('display', 'lg', '700')}
    `}
  }

  .subhead,
  .subhead p {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};

    ${atMinWidth.md`
      ${font('text', 'xl', '400')}
    `}

    ${atMinWidth.xl`
      ${font('text', 'lg', '400')}
    `}
  }
`;
