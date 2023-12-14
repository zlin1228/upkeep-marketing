import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
  max-width: 840px;
  height: auto;
  text-align: center;
  padding: 0px 35px;
  margin: 0px auto;
  .kicker {
    color: ${color.primary[700]};
    ${font('overline', 'lg', '700')}
  }
  .heading {
    color: ${color.darkBlue[900]};
    ${font('display', 'lg', '700')};
    @media (max-width: 575px) {
      ${font('display', 'md', '700')};
    }
  }
  .subhead {
    color: ${color.darkBlue[600]};
    ${font('text', 'lg', '400')};
    margin-bottom: 24px;
  }
`;
export const Buttons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    width: auto;
    height: 45px;
    border-radius: 4px;
    margin: 0px 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    .button {
      width: 100%;
      margin: 0px;
    }
    .button:first-child {
      margin-bottom: 16px;
    }
  }
`;
