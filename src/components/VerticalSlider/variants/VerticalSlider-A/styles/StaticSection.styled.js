import styled from 'styled-components';

import { atMinWidth } from '../../../../../atoms/breakpoints';
import { color } from '../../../../../atoms/colors';
import { font } from '../../../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px 24px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
`;
export const Text = styled.div`
  width: 100%;
  .heading {
    ${font('display', 'lg', '700')};
    color: ${color.common.black};
  }
`;
export const Image = styled.div`
  width: 100%;
`;
