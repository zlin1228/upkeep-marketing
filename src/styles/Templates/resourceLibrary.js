import styled from 'styled-components';

export const backgroundMappings = {
  dark: `
    background-color: #0b1a2b;
  `,
  light: `
  background-color: #FFFFFF;
  `,
  blue: `
    background-color: #007BFF;
  `,
};
export const Main = styled.main`
  width: 100%;
  height: auto;
  padding: 0px;
  marign: 0px;
  ${props => backgroundMappings[props.theme]};
`;
export const NewsletterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 0px 15px;
  margin: 0px auto;
  overflow: hidden;
  @media (max-width: 991px) {
    padding: 0px 30px;
  }
`;
