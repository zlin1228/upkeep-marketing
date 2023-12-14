import styled from 'styled-components';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  margin: 0px auto;
  padding: 0px 35px;
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
`;
export const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
  `}
`;
