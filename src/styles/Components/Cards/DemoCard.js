import styled from 'styled-components';

const backgroundMappings = {
  light: 'background: #ffffff;',
  dark: 'background: #182736;',
  blue: 'background: #007bff;',
};

const headerMappings = {
  light: 'color: #182736;',
  dark: 'color: #ffffff;',
  blue: 'color: #ffffff;',
};

const descriptionMappings = {
  light: 'color: #707481;',
  dark: 'color: #F9F9F9;',
  blue: 'color: #F9F9F9;',
};

const buttonMappings = {
  light: `background: #007bff; color: #ffffff; 
  &:hover {
    background: #0056b3; color: #ffffff;
  }`,
  dark: `background: #007bff; color: #ffffff; 
  &:hover {
    background: #0056b3; color: #ffffff;
  }`,
  blue: `background: #ffffff; color: #007bff; 
  &:hover {
    background: #ffffff; color: #007bff;
  }`,
};

export const Frame = styled.div`
  max-width: 670px;
  ${props => backgroundMappings[props.theme]}
  box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  @media (max-width: 661px) {
    padding: 32px 24px;
  }
  .cta_header {
    display: flex;
    align-items: center;
    padding: 0px;
    width: 100%;
    margin-bottom: 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 25.92px;
    line-height: 32px;
    ${props => headerMappings[props.theme]}
    margin-bottom: 24px !important;
    @media (max-width: 661px) {
      margin-bottom: 16px;
    }
    img {
      width: auto !important;
      margin: 0px 16px 0px 0px !important;
    }
  }
  .cta_description {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    ${props => descriptionMappings[props.theme]}
    margin: 0px !important;
    @media (max-width: 661px) {
      font-size: 16px;
    }
  }
  .cta_button {
    display: block;
    width: fit-content;
    height: auto;
    max-height: 48px;
    min-height: 48px;
    text-align: center;
    white-space: nowrap;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.5px;
    padding: 12px 24px;
    margin: 24px 0px 0px;
    border: none;
    border-radius: 4px;
    transition: all 0.3s ease;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    ${props => buttonMappings[props.theme]}
  }
`;
