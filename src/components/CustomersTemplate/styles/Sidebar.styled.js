import styled from 'styled-components';

import { spacing } from '../../../atoms/spacing';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const Container = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};

  @media (max-width: 576px) {
    display: none;
  }
`;

export const StatsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  border: 1px solid #eceef6;
  border-radius: ${spacing[8]};
  padding: ${spacing[24]};

  div:last-child {
    border-bottom: none;
    padding-bottom: ${spacing[0]};
  }
`;

export const StatWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  padding-bottom: ${spacing[12]};
  border-bottom: 1px solid #eceef6;
`;

export const StatsHeading = styled.p`
  ${font('text', 'sm', '700')}
  color: ${color.darkBlue[1000]};
`;

export const StatsText = styled.p`
  ${font('text', 'sm', '400')}
  color: ${color.darkBlue[700]};
`;
