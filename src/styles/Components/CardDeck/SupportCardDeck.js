import styled from 'styled-components';

const backgroundMappings = {
  light: 'background: #ffffff;',
  dark: 'background: #060606;',
  neutral: 'background: #F5F6F9;',
};

const textMappings = {
  light: 'color: #060606;',
  dark: 'color: #fafafa;',
  neutral: 'color: #060606;',
};

export const Section = styled.div`
  width: 100%;
  height: auto;
  ${props => backgroundMappings[props.theme]}
  padding: 96px 15px;
  @media (max-width: 768px) {
    padding: 48px 15px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  max-width: 1170px;
  margin: 0 auto;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 44.79px;
    line-height: 49px;
    text-align: center;
    ${props => textMappings[props.theme]}
    margin-bottom: 48px;
    @media (max-width: 768px) {
      font-size: 32.32px;
      line-height: 1.15;
      margin-bottom: 24px;
    }
  }
`;
export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
