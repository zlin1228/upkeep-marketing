import styled from 'styled-components';
import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';
import { shadow } from '../../../../atoms/shadows';

export const Container = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  background-color: ${color.common.white};
  ${shadow('xl', 'dark')};
  transform: translateY(100%);
  pointer-events: none;
  transition: transform 350ms ease-in-out;
  &.active {
    pointer-events: all;
    transform: translateY(0%);
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  .name {
    ${font('display', 'xs', '800')}
    color: ${color.darkBlue[900]};
  }
  .role {
    ${font('display', 'xs', '600')}
    text-transform: capitalize;
    color: ${color.darkBlue[900]};
  }
`;
export const Bio = styled.p`
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[900]};
`;
export const Button = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0px;
  margin: 0px;
  outline: none;
  background-color: ${color.common.transparent};
  border: none;
  ${font('display', 'xs', '500')}
  color: ${color.darkBlue[900]};
  &:hover,
  &:focus {
    outline: none;
    background-color: ${color.common.transparent};
    border: none;
    ${font('display', 'xs', '500')}
    color: ${color.darkBlue[900]};
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;
