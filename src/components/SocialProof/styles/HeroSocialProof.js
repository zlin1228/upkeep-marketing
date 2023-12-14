import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

const textMappings = {
  Blue: `color: ${color.common.white};`,
  Dark: `color: ${color.common.white};`,
  Red: `color: ${color.common.white};`,
  'Red-Light': `color: ${color.darkBlue[900]};`,
  Grid: `color: ${color.darkBlue[600]};`,
  'Grid-Dark': `color: ${color.darkBlue[100]};`,
};

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Stars = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  p {
    ${props => textMappings[props.theme]}
    ${font('text', 'sm', 400)};
    margin: 0px 0px 0px 16px;
  }
  svg {
    width: 16px;
    height: 16px;
    color: #efc75e;
    margin-right: 5px;
  }
`;

export const Logos = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
  @media (max-width: 499px) {
    gap: 12px;
  }
`;

export const Logo = styled.img`
  width: ${props => props?.width || 'fit-content'};
  max-width: 150px;
  height: ${props => props?.height || '100%'};
  max-height: 22px;
  margin-right: 24px;
`;
