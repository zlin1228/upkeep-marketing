import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { shadow } from '../../../../atoms/shadows';

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  height: auto;
  padding: 32px;
  background: white;
  ${shadow('md', 'dark')};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  text-align: center;
  svg {
    width: 50px;
    height: 50px;
  }
  p {
    ${font('display', 'sm', 600)}
    color: ${color.darkBlue[900]};
  }
`;
