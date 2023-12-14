import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { shadow } from '../../../atoms/shadows';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};
  padding: ${spacing[24]};
  border-radius: ${spacing[12]};
  background: linear-gradient(
      141deg,
      rgba(199, 220, 252, 0.2) 27.87%,
      rgba(255, 255, 255, 0) 87.35%
    ),
    #f2f6fc;

    0px 4px 8px -2px rgba(16, 24, 40, 0.1);
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[12]};

  .heading {
    ${font('text', 'xl', '700')}
    color: ${color.darkBlue[1000]};
  }

  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
`;
