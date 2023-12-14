import { Link } from 'gatsby';
import styled from 'styled-components';

export const buttonBackgrounds = {
  Light:
    'background-color: #FFFFFF; color: #007BFF; &:hover { background: #ededed; color: #007BFF; }',
  Blue:
    'background-color: #007BFF; color: #FFFFFF; &:hover { background: #0056b3; color: #FFFFFF; }',
};

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
export const ScrollLink = styled.button`
  ${props => buttonBackgrounds[props.background]}
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
  ${props =>
    props.align === 'true' ? 'margin: 16px 0px;' : 'margin: 16px auto;'}
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ConversionLink = styled(Link)`
  ${props => buttonBackgrounds[props.background]}
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
  margin: 16px auto;
  ${props =>
    props.align === 'true' ? 'margin: 16px 0px;' : 'margin: 16px auto;'}
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
