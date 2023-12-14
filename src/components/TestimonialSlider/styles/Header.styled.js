import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 1030px;
  height: auto;
  text-align: center;
  padding: 0px 30px;
  margin: ${props =>
    props.variant === 'secondary' ? '0px auto' : '0px auto 64px'};
  .kicker {
    color: ${color.steel[800]};
    ${font('overline', 'md', '700')}

    ${atMinWidth.md`
      ${font('overline', 'lg', '700')}
    `}
    ${props =>
      props.variant === 'secondary' &&
      `
        ${atMinWidth.md`
           ${font('overline', 'md', '700')}
        `}
         ${atMinWidth.lg`
           ${font('overline', 'lg', '700')}
        `}
    `}
  }
  .heading {
    ${props =>
      props.variant === 'secondary'
        ? font('display', 'sm', '700')
        : font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    ${atMinWidth.lg`
           ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
    ${atMinWidth.lg`
      ${font('text', 'lg', '400')}
    `}
  }
`;
export const Buttons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
  @media (max-width: 575px) {
    flex-direction: column;
    .button {
      width: 100%;
      margin: 0px;
    }
  }
`;
