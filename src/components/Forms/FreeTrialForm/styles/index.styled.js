import styled from 'styled-components';

import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';
import { atMinWidth } from '../../../../atoms/breakpoints';
import { spacing } from '../../../../atoms/spacing';

import {
  defaultStyles,
  variants,
  sizes,
} from '../../../CallToAction/styles/CallToAction.styled';

export const Container = styled.div`
  width: 100%;
  border-radius: ${spacing[16]};
  background: ${color.midnight[25]};
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);
  overflow: hidden;

  &.loading {
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  height: 7px;
  background-color: ${color.steel[700]};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  padding: ${spacing[32]} ${spacing[16]};

  ${atMinWidth.md`
    padding: ${spacing[32]} ${spacing[40]};
  `}
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[12]};

  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[1000]};
    text-align: center;
  }

  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};

  && input {
    margin-bottom: ${spacing[20]};
  }

  /* Hidden Fields */
  & input[name='country'],
  & input[name='state'],
  & input[name='industry'],
  & input[name='industrydetail'],
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

export const ErrorMessage = styled.div`
  transform: translateY(-10px);
  ${font('text', 'sm', '400')}
  color: ${color.primary[1000]};

  p {
    ${font('text', 'sm', '400')}
    color: ${color.primary[1000]};
  }

  a {
    ${font('text', 'sm', '400')}
    color: ${color.blue[700]};
  }
`;

export const Button = styled.button`
  width: 100%;
  text-align: center;
  transition: all 250ms ease-in-out;
  ${defaultStyles}
  ${sizes.sm}
  ${variants['Filled - Steel']}

  ${atMinWidth.md`
      ${sizes.md}
  `}

   ${atMinWidth.xl`
      ${sizes.lg}
  `}
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
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
