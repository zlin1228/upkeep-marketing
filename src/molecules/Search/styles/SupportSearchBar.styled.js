import styled from 'styled-components';

import { atMinWidth } from '../../../atoms/breakpoints';
import { sizes } from './Search.styled';

export const Form = styled.form`
  ${sizes.sm.container}
  max-width: 100%;
  ${atMinWidth.md`
    ${sizes.lg.container}
  `}
`;
export const Input = styled.input`
  ${sizes.sm.input}
  ${atMinWidth.md`
    ${sizes.lg.input}
  `}
`;
export const IconContainter = styled.div`
  ${sizes.sm.icon}
  ${atMinWidth.md`
    ${sizes.lg.icon}
  `}
`;
