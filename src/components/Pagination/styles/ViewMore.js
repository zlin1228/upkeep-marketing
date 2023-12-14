import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const ViewWrapper = styled.div`
  width: 100%;
  margin: 64px auto 32px auto;
  display: flex;
  justify-content: center;
`;
export const ViewMoreButton = styled.button`
  position: relative;
  display: block;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  ${font('text', 'lg', '900')}
  color: ${color.darkBlue[900]};
  &:hover {
    color: ${color.steel[800]};
    background: none;
    border-bottom: 2px solid ${color.steel[800]};
  }
`;
