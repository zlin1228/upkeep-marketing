import styled from 'styled-components';

import { font } from '../../../../../atoms/typography';
import { color } from '../../../../../atoms/colors';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1050px;
  `}
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  .heading-kicker {
    ${font('overline', 'lg', '700')}
    color: ${color.darkBlue[900]};
  }
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    ${atMinWidth.lg`
      ${font('display', 'lg', '700')}
    `}
    h1, h2, h3, h4, h5, h6, p {
      ${font('display', 'md', '700')}
      color: ${color.darkBlue[900]};
      ${atMinWidth.lg`
        ${font('display', 'lg', '700')}
      `}
    }
  }
  .subhead,
  .subhead p {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
  }
`;
