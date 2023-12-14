import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';
import { shadow } from '../../../atoms/shadows';

export const Container = styled.div`
  width: 100%;
  padding: 0px 24px 48px;
  transform: translateY(72px);
  ${atMinWidth.sm`
    padding: 0px 35px 48px;
  `}
  ${atMinWidth.xl`
    padding-bottom: 0px;
  `}
`;
export const OuterWrapper = styled.div`
  width: 100%;
  max-width: 1040px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  background-color: ${color.common.white};
  border-radius: 16px;
  ${shadow('sm', 'dark')}
  margin: 0px auto;
  padding: 32px;
  .heading {
    ${font('overline', 'lg', '600')}
    text-align: center;
    color: ${color.primary[700]};
  }
`;
export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 810px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin: 0px auto;
  ${atMinWidth.md`
    flex-wrap: nowrap;
    gap: 89px;
  `}
  img {
    min-width: 120px;
    max-height: 42px;
    aspect-ratio: 3/2;
    object-fit: contain;
    ${atMinWidth.md`
        width: 100%;
        min-width: auto;
    `}
  }
`;
