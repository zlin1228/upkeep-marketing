import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { variants } from '../../CallToAction/styles/CallToAction.styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex !important;
  flex-direction: column;
  gap: 24px;
`;
export const Image = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16/9;
`;
export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  a {
    &.hovered svg {
      transform: translate(6px, -0.2px);
    }
    svg {
      transform: translate(0px, -0.2px);
    }
  }
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
`;
export const Button = styled.button`
  ${variants.Clickable}
  background: ${color.common.transparent};
  outline: none;
  border: none;
  &:hover,
  &:focus {
    background: ${color.common.transparent};
    outline: none;
    border: none;
  }
`;
