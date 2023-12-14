import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';

import GridBackground from '../../Hero/assets/grid-gray.svg';

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: ${spacing[48]} ${spacing[0]};
  background: linear-gradient(
    180deg,
    #deebff 46.06%,
    rgba(255, 255, 255, 0) 46.08%
  );
  ${atMinWidth.md`
    padding: ${spacing[64]} ${spacing[0]};
  `}
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${GridBackground});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  overflow: hidden;

  ${atMinWidth.xl`
    max-width: ${containers.xl};
    padding: ${spacing[0]} ${spacing[16]};
  `}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing[32]};
  padding: ${spacing[40]} ${spacing[24]};
  overflow: hidden;
  background: linear-gradient(180deg, #00395e 0%, #001828 100%);
  border: 1px solid ${color.steel[900]};
  border-radius: ${spacing[32]};

  ${atMinWidth.sm`
    padding: ${spacing[48]} ${spacing[18]};
  `}

  ${atMinWidth.xl`
    padding: ${spacing[64]} ${spacing[0]};
  `}

  .social-proof {
    width: fit-content;
    align-items: center;
  }

  .social-proof-logos {
    gap: 16px;
    ${atMinWidth.sm`
      gap: 48px;
    `}
  }
`;

export const Text = styled.div`
  width: 100%;
  max-width: 496px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${spacing[24]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.xl`
    max-width: ${containers.md};
  `}

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

  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[100]};
  }
`;
