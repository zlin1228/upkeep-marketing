import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0px;
  border-radius: 12px;
  background-color: ${color.darkGrey[50]};
  border: 1px solid ${color.darkGrey[200]};
  overflow: hidden;
  transition: all 250ms ease-in-out;
  &:hover {
    background-color: ${color.common.white};
    box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
  }
  ${atMinWidth.xl`
    flex-direction: row;
    padding: 24px;
  `}
`;
export const Image = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  ${atMinWidth.xl`
    width: 100%;
    max-width: 120px;
    height: 100%;
    max-height: 120px;
    apsect-ratio: 1/1;
    .gatsby-image {
      width: 100%;
      height: 100%;
    }
  `}
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 24px 24px;
  ${atMinWidth.xl`
    padding: 0px;
  `}
  .heading-kicker {
    ${font('overline', 'lg', '700')};
    color: ${color.darkBlue[400]};
  }
  .heading {
    ${font('display', 'xs', '700')};
    color: ${color.darkBlue[900]};
  }
`;
