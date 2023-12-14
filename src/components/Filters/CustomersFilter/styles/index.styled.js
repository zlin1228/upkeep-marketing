import styled from 'styled-components';

import { containers } from '../../../../atoms/containers';
import { spacing } from '../../../../atoms/spacing';
import { atMinWidth } from '../../../../atoms/breakpoints';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';

export const Section = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};

  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[1000]};
  }

  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[700]};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  ${atMinWidth.xl`
    flex-direction: row;
  `}
`;

export const Filters = styled.div`
  display: none;

  ${atMinWidth.sm`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[32]};
    padding: ${spacing[0]};
  `}

  ${atMinWidth.xl`
    grid-template-columns: repeat(2, max-content);
  `}
`;

export const MobileFilters = styled.div`
  width: 100%;
  height: auto;
  display: none;
  align-items: flex-end;
  justify-content: space-between;
  p {
    font-weight: 700;
    font-size: 13.5px;
    line-height: 150%;
    color: #282f32;
    margin: 0px;
  }
  @media (max-width: 576px) {
    display: flex;
  }
`;

export const MobileButton = styled.button`
  width: auto;
  height: 56px;
  padding: 16px 24px;
  background: #ffffff;
  border: 1px solid #eceef6;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #0d141a;
  &:focus,
  &:hover {
    outline: none;
    background: #ffffff;
    color: #0d141a;
  }
  img {
    margin-left: 8px;
  }
`;
