import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const Container = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 16px;
  padding: 32px;
  background: #ffffff;
  border: 1px solid #eceef6;
  box-shadow: 0px 12px 32px rgba(45, 40, 77, 0.1);
  border-radius: 12px;
  overflow: hidden;
  svg {
    margin-right: 5px;
  }
  h6 {
    ${font('display', 'xs', '600')}
    color: ${color.darkBlue[900]};
    margin: 16px 0px;
  }
  div {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
`;
export const Author = styled.div`
  width: auto;
  height: auto;
  h6 {
    ${font('display', 'xs', '600')}
  }
  .name {
    color: ${color.primary[700]};
    margin-bottom: 4px;
  }
  .company {
    color: ${color.darkBlue[900]};
    margin: 0px;
  }
`;
