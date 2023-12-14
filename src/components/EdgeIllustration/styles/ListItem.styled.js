import styled from 'styled-components';

import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};

  ${atMinWidth.xl`
    gap: ${spacing[22]};
  `}

  .subhead {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    ${font('text', 'sm', '400')};
    color: ${color.darkBlue[600]};
    margin-top: ${spacing[8]};

    ${atMinWidth.xs`
      ${font('text', 'lg', '400')};
    `}

    ${atMinWidth.xl`
      height: 40px;
      ${font('text', 'sm', '400')};
    `}

    * {
      ${font('text', 'sm', '400')};
      color: ${color.darkBlue[600]};

      ${atMinWidth.xs`
        ${font('text', 'lg', '400')};
      `}

      ${atMinWidth.xl`
        ${font('text', 'sm', '400')};
      `}
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${spacing[16]};

  .eyebrow {
    ${font('overline', 'sm', '700')};
    color: ${color.primary[400]};
  }

  .heading {
    ${font('display', 'sm', '700')};
    color: ${color.darkBlue[1000]};
    white-space: nowrap;

    ${atMinWidth.sm`
        ${font('display', 'lg', '700')};
    `}
    ${atMinWidth.xl`
        ${font('display', 'xs', '700')};
    `}
  }
`;

export const Image = styled.div`
  width: inherit;
  height: 100%;

  filter: drop-shadow(
      0px 1.5326331853866577px 1.2261064052581787px rgba(8, 16, 22, 0.08)
    )
    drop-shadow(
      0px 3.683130979537964px 2.9465043544769287px rgba(8, 16, 22, 0.11)
    )
    drop-shadow(
      0px 6.9350080490112305px 5.548006057739258px rgba(8, 16, 22, 0.14)
    );

  && img,
  && .gatsby-image {
    width: 100%;
    height: 100%;
  }
`;

export const Spacer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 150px;

  ${atMinWidth.sm`
    min-height: 180px;
  `}
`;

export const Arrows = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${atMinWidth.xl`
    height: ${({ height }) => height}px;
    bottom: 60px;
  `}

  svg {
    width: initial;
    height: initial;
    transform: rotate(90deg);

    ${atMinWidth.xs`
        width: 48px;
        height: 88px;
    `}

    ${atMinWidth.xl`
        width: 36px;
        height: 66px;
        transform: rotate(0deg);
    `}
  }
`;
