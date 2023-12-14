import styled from 'styled-components';
import { headingKickerColors } from '../../../utils/colorMappings';

export const Section = styled.section`
  padding: 96px;
  width: 100%;
  height: auto;
  background: #0b1a2b;
  margin: 0px;
  @media (max-width: 768px) {
    padding: 48px;
  }
  @media (max-width: 499px) {
    padding: 48px 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 671px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;

  h2 {
    width: 100%;
    height: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 37.32px;
    line-height: 48px;
    color: #ffffff;
    margin-bottom: 24px;
    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 25px;
    }
  }

  .subhead {
    width: 100%;
    height: auto;
    margin-bottom: 51px;
    @media (max-width: 768px) {
      margin-bottom: 32px;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 25px;
      color: #ffffff;
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
`;

export const HeadingKicker = styled.h5`
  ${props => headingKickerColors[props.color]}
`;
