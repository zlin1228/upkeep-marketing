import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';
import { shadow } from '../../../../atoms/shadows';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  background-color: ${color.primary[700]};
  ${shadow('xl', 'dark')}
  border-radius: 8px;
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .logo {
    width: 132px;
    height: 34px;
  }
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.common.white};
    ${atMinWidth.sm`
      ${font('display', 'lg', '700')}
    `}
  }
`;
