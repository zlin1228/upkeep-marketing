import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const Container = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  .rating {
    width: 100%;
    height: 22px;
    transform: translateY(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.primary[700]};
  }
  .subhead {
    ${font('display', 'xs', '700')}
    color: ${color.darkBlue[900]};
  }
`;
