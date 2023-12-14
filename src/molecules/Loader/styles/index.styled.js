import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
export const Text = styled.div`
  ${font('display', 'sm', '700')}
  text-align: center;
  color: ${color.darkBlue[900]};
`;
