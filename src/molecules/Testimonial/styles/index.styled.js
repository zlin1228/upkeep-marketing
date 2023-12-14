import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};
  background-color: ${props =>
    props.theme === 'Light' ? color.darkBlue[25] : color.darkBlue[800]};
  border-radius: ${spacing[12]};
  padding: ${spacing[24]};
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props =>
    props.theme === 'Light' ? color.darkBlue[1000] : color.common.white};
  .company-logo {
    width: 140px;
    height: 24px;
  }
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
`;

export const Quote = styled.div`
  width: 100%;
  &,
  & p {
    ${font('text', 'lg', '400')};
    color: ${props =>
      props.theme === 'Light' ? color.darkBlue[600] : color.darkBlue[100]};
    strong {
      color: ${props =>
        props.theme === 'Light' ? color.darkBlue[1000] : color.common.white};
      ${font('text', 'lg', '700')};
    }
  }
`;
