import styled from 'styled-components';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding-bottom: 64px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  height: auto;
  padding: 0px 15px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${atMinWidth.xs`
    padding: 0px 35px;
  `}
  ${atMinWidth.lg`
    max-width: 1230px;
  `}
`;
