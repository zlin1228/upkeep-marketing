import styled from 'styled-components';

const backgroundColorMappings = {
  blue: 'background: #007BFF;',
  dark: 'background: #172636;',
};

const textColorMappings = {
  blue: 'color: #ffffff;',
  dark: 'color: #ffffff;',
};

export const StyledSidebarCard = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  background: #ffffff;
  ${props => (props.rounded ? `border-radius: 8px;` : ``)}
  ${props => (props.border ? `border-top: 4px solid #007BFF;` : ``)}
  ${props => backgroundColorMappings[props.background]}
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    width: 100%;
  }
  hr {
    background: #535963;
    margin-bottom: 24px;
  }
  .subscirbe_links_wrapper {
    display: flex;
    flex-direction: column;
  }
  .subscribe_link:nth-child(2) {
    margin: 24px 0px;
  }
  button {
    border-radius: 4px;
  }
`;
export const SidebarHeader = styled.div`
  margin-bottom: 18px;
  strong {
    font-size: 23px;
    line-height: 32px;
    color: #33394b;
    ${props => textColorMappings[props.background]}
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 1rem;
    ${props => textColorMappings[props.background]}
  }
`;
