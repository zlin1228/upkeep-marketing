import styled from 'styled-components';
import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';
import { shadow } from '../../../../atoms/shadows';
import { atMinWidth } from '../../../../atoms/breakpoints';
import { spacing } from '../../../../atoms/spacing';
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
  border: 1px solid ${color.darkBlue[50]};
  ${shadow('xl', 'dark')};
  border-radius: 8px;
  gap: ${spacing[16]};
  padding: ${spacing[32]} ${spacing[16]};
  ${atMinWidth.sm`
    padding: ${spacing[32]} ${spacing[40]};
  `}
  &.loading {
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;
export const Header = styled.p`
  width: 100%;
  text-align: center;
  ${font('display', 'sm', '700')}
  color: ${color.darkBlue[1000]};
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
  && input {
    margin-bottom: ${spacing[12]};
  }
  /* Hidden Fields */
  & input[name='country'],
  & input[name='state'],
  & input[name='industry'],
  & input[name='industrydetail'],
  & input[name='DoNotRoute'],
  & input[name='LeadStatus'],
  & input[name='autofocus'] {
    display: none !important;
  }
`;

export const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${atMinWidth.md`
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[12]};
`}
`;

export const Button = styled.button`
  width: 100%;
  text-align: center;
  margin-top: ${spacing[12]};
  transition: all 250ms ease-in-out;
  ${defaultStyles}
  ${sizes.sm}
  ${variants['Filled - Red']}
  ${atMinWidth.md`
      ${sizes.md}
  `}
   ${atMinWidth.xl`
      ${sizes.lg}
  `}
`;

export const FooterLink = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[8]};
  p {
    display: flex;
    align-items: center;
    gap: ${spacing[8]};
    ${font('text', 'sm', '500')}
    color: ${color.darkBlue[700]};
    text-align: center;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${spacing[16]};
  .use-policy {
    p {
      ${font('text', 'xs', '400')}
      color: ${color.darkBlue[700]};
      text-align: center;
    }
    a {
      ${font('text', 'xs', '400')}
      color: ${color.steel[700]};
      &:hover {
        color: ${color.steel[700]};
      }
    }
  }
`;
