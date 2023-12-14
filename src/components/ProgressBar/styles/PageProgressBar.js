import styled from 'styled-components';
import { atMinWidth } from '../../../atoms/breakpoints';

const ProgressBar = styled.div`
  position: fixed;
  top: 57px;
  background: linear-gradient(
    to right,
    rgba(0, 124, 176, 0.8) ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 4px;
  z-index: 3;
  ${atMinWidth.xl`
    top: 80px;
  `}
`;

export default ProgressBar;
