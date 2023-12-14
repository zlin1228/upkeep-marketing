import styled from 'styled-components';

const themes = {
  Light: 'background: #ffffff;',
  Neutral: 'background: #f5f6f9;',
};
export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  ${props => themes[props.theme]};
  @media (max-width: 768px) {
    padding: 48px 0px;
  }
  @media (max-width: 499px) {
    padding: 32px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1230px;
  height: auto;
  margin: 0px auto;
  padding: 0px 30px;
  @media (max-width: 499px) {
    padding: 0px 15px;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1,
  h2,
  h3 {
    margin-bottom: 24px 0;
    text-align: center;
  }
  h1 {
    text-align: center;
    line-height: 56px;
    font-size: 40px;
  }
  p {
    margin: 24px 0;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
  }
  img {
    @media (max-width: 1100px) {
      max-width: 100%;
    }
  }
  h5 {
    color: #007bff;
    text-align: center;
  }
`;
