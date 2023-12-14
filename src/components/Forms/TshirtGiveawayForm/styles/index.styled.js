import styled from 'styled-components';
import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';
import { shadow } from '../../../../atoms/shadows';
import { atMinWidth } from '../../../../atoms/breakpoints';
import {
  defaultStyles,
  variants,
  sizes,
} from '../../../CallToAction/styles/CallToAction.styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${color.common.white};
  border: 1px solid ${color.mediumGrey[50]};
  ${shadow('md', 'dark')};
  border-radius: 8px;
  gap: 16px;
  padding: 24px;
  ${atMinWidth.sm`
    padding: 32px;
  `}
  &.loading {
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;
export const Header = styled.p`
  width: 100%;
  ${font('display', 'sm', '700')}
  color: ${color.darkBlue[900]};
  ${atMinWidth.sm`
    ${font('display', 'md', '700')}
  `}
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Button = styled.button`
  width: 100%;
  text-align: center;
  transition: all 250ms ease-in-out;
  ${defaultStyles}
  ${variants.Red}
  ${sizes.xxl}
`;
export const Footer = styled.p`
  ${font('text', 'sm', '700')}
  color: ${color.darkBlue[600]};
  text-align: left;
  a {
    ${font('text', 'sm', '700')}
    color: ${color.primary[700]};
    svg {
      transform: translate(0px, 1.5px);
    }
    &:hover {
      color: ${color.primary[400]};
      svg {
        transform: translate(6px, 1.5px);
      }
    }
  }
`;
