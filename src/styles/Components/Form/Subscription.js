import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';

import {
  defaultStyles,
  sizes,
  variants,
} from '../../../components/CallToAction/styles/CallToAction.styled';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;

  input {
    display: flex;
    align-items: center;
    gap: ${spacing[8]};
    padding: ${spacing[10]} ${spacing[14]};
    border-radius: ${spacing[8]};
    border: 1px solid ${color.darkBlue[200]};
    background: ${color.common.white};
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};

    &::placeholder {
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[600]};
    }
  }

  .error-message {
    display: block;
    ${font('text', 'sm', '600')}
    color: ${color.primary[700]};
    margin-bottom: 8px;
  }

  button {
    ${defaultStyles}
    ${sizes.xl}
    ${variants['Outline Dark - Transparent']}
  }
`;

export const Success = styled.p`
  ${font('text', 'md', '700')}
  color: ${color.mediumGrey[600]};
`;
