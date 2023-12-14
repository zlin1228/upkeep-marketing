import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding-top: 64px;
  padding-bottom: 64px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  height: auto;
  margin: 0px auto;
  padding: 0px 35px;
  @media (max-width: 992px) {
    max-width: 840px;
  }
  @media (max-width: 576px) {
    padding: 0px 15px;
  }
  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #515667;
    text-align: center;
    margin-bottom: 32px;
    b {
      font-weight: 700;
      color: #0d141a;
    }
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 42.5px;
  ${atMinWidth.xl`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 56px;
  `}
`;

export const Grid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 30px;
  margin-bottom: 32px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Button = styled.button`
  width: auto;
  height: auto;
  margin: 0px auto;
  background: transparent;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 1;
  transition: all 300ms ease-in-out;
  &:hover,
  &:focus {
    background: transparent;
    outline: none;
    border: none;
    opacity: 0.8;
  }
  span {
    display: block;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: ${color.primary[700]};
    margin-bottom: 8px;
  }
  svg {
    width: 12px;
    height: 12px;
  }
`;
