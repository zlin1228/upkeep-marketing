import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { shadow } from '../../../atoms/shadows';

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${color.darkBlue[25]};
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  transition: all 300ms ease-in-out;
  &:hover,
  &:focus {
    background-color: ${color.common.white};
    ${shadow('md', 'dark')}
    .heading {
      color: ${color.primary[700]};
    }
  }
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .heading {
    ${font('display', 'xs', '700')}
    color: ${color.darkBlue[900]};
    transition: all 300ms ease-in-out;
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  .tag {
    ${font('text', 'sm', '600')}
    text-transform: uppercase;
    color: ${color.darkBlue[300]};
  }
`;
