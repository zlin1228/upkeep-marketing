import styled from 'styled-components';

import { color } from '../../../../../atoms/colors';
import { font } from '../../../../../atoms/typography';
import { spacing } from '../../../../../atoms/spacing';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[64]};

  ${atMinWidth.sm`
     gap: ${spacing[16]};
  `}

  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: 1fr 378px;
    gap: ${spacing[38]};
  `}
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  .eyebrow {
    ${font('overline', 'md', '700')}
    color: ${color.steel[800]};
  }

  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[1000]};

    ${atMinWidth.sm`
      ${font('display', 'md', '700')}
    `}

    ${atMinWidth.xl`
      ${font('display', 'lg', '700')}
    `}
  }

  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
  }
`;

export const Card = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[24]};
  padding: ${spacing[24]};
  background-color: ${color.darkBlue[25]};
  border: 1px solid ${color.steel[100]};
  border-radius: ${spacing[16]};
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${spacing[12]};

    .heading {
      ${font('display', 'xs', '700')}
      color: ${color.darkBlue[1000]};
    }
  }

  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
  }
`;
