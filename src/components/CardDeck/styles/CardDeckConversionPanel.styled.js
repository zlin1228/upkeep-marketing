import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.div`
  width: 100%;
  padding: 48px 30px 0px 30px;
  background: linear-gradient(
    180deg,
    transparent 65%,
    ${color.darkGrey[900]} 35%
  );
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1230px;
  margin: 0px auto;
`;

export const Frame = styled.div`
  width: 100%;
  background: linear-gradient(
      199.73deg,
      rgba(255, 255, 255, 0.2) 41.49%,
      rgba(255, 240, 243, 0.2) 78.73%
    ),
    ${color.common.white};
  box-shadow: 0px 10px 20px rgba(50, 50, 51, 0.1);
  border-radius: 24px;
  padding: 64px 0px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  margin: 0px auto;
  padding: 0px 30px;
  .heading {
    ${font('display', 'md', '700')}
    ${atMinWidth.lg`
      ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[700]};
    ${atMinWidth.lg`
      ${font('text', 'lg', '400')}
    `}
  }
  .disclaimer {
    ${font('text', 'xs', '400')}
    color: ${color.darkBlue[700]};
    ${atMinWidth.lg`
      ${font('text', 'sm', '400')}
    `}
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0px auto;
  ${atMinWidth.md`
    width: fit-content;
    flex-direction: row;
  `}
  a {
    width: 100%;
    ${atMinWidth.md`
      width: fit-content;
    `}
  }
`;
