import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
  max-width: 840px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  padding: 0px 35px;
  margin: 0px auto 40px;
  .heading-kicker {
    ${font('overline', 'lg', '600')}
    color: ${color.primary[700]};
    margin: 0px;
  }
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    margin: 0px;
    @media (min-width: 992px) {
      ${font('display', 'lg', '700')}
    }
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
    margin: 0px;
    p {
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[600]};
      margin: 0px;
    }
    @media (min-width: 992px) {
      ${font('text', 'lg', '400')}
      p {
        ${font('text', 'lg', '400')}
      }
    }
  }
`;
export const Buttons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
