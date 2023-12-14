import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';

import { variants } from '../../../CallToAction/styles/theme.styled';

export const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 280px;
  padding-right: 32px;
`;

export const Button = styled.button`
  ${variants.Clickable}
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0px;
  &:hover,
  &:focus {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Heading = styled.p`
  ${font('text', 'lg', '700')}
  color: ${({ theme }) =>
    theme === 'White' ? color.darkBlue[1000] : color.common.white};
  transition: color 0.3s ease-in-out;
  ${Frame}:hover & {
    color: ${color.yellow[800]};
  }
`;

export const Subhead = styled.div`
  ${font('text', 'lg', '400')}
  color: ${({ theme }) =>
    theme === 'White' ? color.darkBlue[600] : color.darkBlue[100]};
  p {
    margin-bottom: 0px;
  }
`;

export const Icon = styled.div`
  height: 52px;
  width: 52px;
  filter: grayscale(1);
  transition: filter 0.3s ease-in-out;
  ${Frame}:hover & {
    filter: grayscale(0);
  }
`;
