import styled from 'styled-components';
import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateY(-100%);
  pointer-events: none;
  transition: transform 350ms ease-in-out;
  &.active {
    pointer-events: all;
    transform: translateY(0%);
  }
`;
export const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 37.46%,
    rgba(3, 3, 3, 0.113114) 52.89%,
    rgba(28, 28, 28, 0.77) 79.53%
  );
  mix-blend-mode: normal;
  filter: drop-shadow(0px 8px 56px rgba(8, 26, 40, 0.15));
  z-index: 100;
`;
export const Details = styled.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px 24px;
  z-index: 100;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  .name {
    ${font('display', 'xs', '700')}
    color: ${color.common.white};
  }
  .role {
    ${font('text', 'md', '400')}
    color: ${color.common.white};
  }
`;
export const Button = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  outline: none;
  background-color: ${color.common.transparent};
  border: none;
  transition: transform 200ms ease-in-out;
  &:hover,
  &:focus {
    outline: none;
    background-color: ${color.common.transparent};
    border: none;
    transform: translateY(-4px);
  }
`;
