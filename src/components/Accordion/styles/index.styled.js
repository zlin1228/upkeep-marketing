import styled, { css } from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';
import { backgroundImages } from '../../../atoms/backgroundImage';

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: ${spacing[48]} ${spacing[0]};

  ${atMinWidth.sm`
    padding: ${spacing[64]} ${spacing[0]};
  `}
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

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing[30]};
  z-index: 2;
`;

const layouts = {
  split: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${spacing[32]};

    .accordion-heading {
      text-align: center;
    }

    ${atMinWidth.sm`
      gap: ${spacing[48]};
    `}

    ${atMinWidth.xl`
      display: grid;
      grid-template-columns: 554px 1fr;
      gap: ${spacing[72]};
      align-items: flex-start;


      .accordion-heading {
        text-align: left;
      }
    `}
  `,
  stack: `
    display: grid;
    grid-template-columns: repeat(1, 770px);
    gap: 30px;
    text-align: center;
    justify-content: center;
    @media (max-width: 991px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 30px 0px;
    }
    .accordion-content {
        text-align: left;
        padding: 14px 24px;
    }
  `,
  image: `
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 48px;
    justify-content: space-between;
    text-align: center;
    .accordion-heading {
        max-width: 770px;
        margin: 0px auto;
    }
  `,
};

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}

  ${props => layouts[props?.type]}

  .accordion-heading {
    display: flex;
    flex-direction: column;
    gap: ${spacing[16]};
    z-index: 2;

    ${atMinWidth.xl`
      gap: ${spacing[24]};
    `}
  }
`;

export const HeadingKicker = styled.h5`
  ${font('overline', 'lg', '700')}
  color: ${color.steel[800]};
`;

export const Heading = styled.h2`
  ${font('display', 'sm', '700')}
  color: ${color.darkBlue[1000]};

  ${atMinWidth.sm`
    ${font('display', 'lg', '700')}
  `}
`;

export const Subhead = styled.div`
  &,
  & p {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
  }
`;

export const Buttons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  ${props => props?.type === 'image' && 'justify-content: center;'}
  @media (max-width: 992px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = css`
  display: block;
  width: fit-content;
  height: auto;
  text-align: center;
  white-space: nowrap;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.5px;
  padding: 10px 24px;
  margin-right: 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 0px 16px 0px;
  }
`;
