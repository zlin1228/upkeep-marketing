import styled from 'styled-components';

import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Section = styled.div`
  width: 100%;
  padding: 64px 0px;
  background: ${color.midnight[25]};
  ${atMinWidth.sm`
    padding: 72px 0px;
  `} ${atMinWidth.xl`
    padding: 96px 0px;
  `};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.sm};
  display: flex;
  flex-direction: column;
  gap: ${spacing[48]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
    gap: ${spacing[64]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.lg};
    gap: ${spacing[80]};
  `}
`;

export const Header = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  margin: 0px auto;

  .heading {
    ${font('display', 'md', '700')};
    color: ${color.darkBlue[1000]};
    text-align: center;

    ${atMinWidth.sm`
        ${font('display', 'lg', '700')};
    `}
    ${atMinWidth.xl`
        ${font('display', 'xl', '700')};
    `}
  }

  .subhead,
  .subhead p {
    ${font('text', 'lg', '400')};
    color: ${color.darkBlue[600]};
    text-align: center;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  padding: ${spacing[64]} ${spacing[72]};
  border-radius: 16px;
  background: linear-gradient(
    220deg,
    rgba(71, 105, 134, 0.1) 6.78%,
    rgba(39, 63, 83, 0) 102.94%
  );
  ${atMinWidth.md`
      gap: ${spacing[32]};
  `}
`;

export const ListHeading = styled.p`
  ${font('display', 'sm', '700')};
  color: ${color.darkBlue[1000]};
  text-align: center;
  ${atMinWidth.md`
        ${font('display', 'lg', '700')};
  `}
`;

export const List = styled.ul`
  position: relative;
  width: 100%;
  max-width: 502px;
  display: flex;
  flex-direction: column;
  margin: ${spacing[0]} auto;
  border-radius: 16px;
  list-style: none;

  ${atMinWidth.xl`
    max-width: 100%;
    display: grid;
    grid-template-columns: ${props => {
      let template = '';
      for (let i = 0; i < props.numOfItems; i++) {
        template += '1fr ';
        if (i < props.numOfItems - 1) {
          template += '67px ';
        }
      }
      return template.trim();
    }};
  `}
`;

export const Stroke = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: -1;

  ${atMinWidth.xl`
    height: ${({ height }) => height}px;
    top: unset;
    bottom: 60px;
  `}
`;

export const Line = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &::before {
    content: '';
    width: 46px;
    height: calc(100% - 220px);
    position: absolute;
    top: unset;
    left: 50%;
    right: 0px;
    bottom: 0px;
    transform: translateX(-50%);
    margin: auto 0px;
    background-color: rgba(207, 218, 228, 0.4);

    ${atMinWidth.xs`
        width: 75px;
    `}

    ${atMinWidth.xl`
        width: calc(100% - 200px);
        height: 64px;
        top: 50%;
        left: 0px;
        right: 0px;
        margin: ${spacing[0]} auto;
        transform: translateY(-50%);
    `}
  }
`;
