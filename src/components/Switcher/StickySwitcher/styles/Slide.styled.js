import styled from 'styled-components';

import { containers } from '../../../../atoms/containers';
import { spacing } from '../../../../atoms/spacing';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  gap: ${spacing[32]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};
  z-index: 10;

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  @media (min-width: 835px) {
    max-width: ${containers.xl};
    flex-direction: ${({ idx }) => (idx % 2 === 0 ? 'row-reverse' : 'row')};
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[24]};

  @media (min-width: 835px) {
    width: 520px;
  }

  .heading {
    ${font('display', 'sm', '700')}
    color: ${({ theme }) =>
      theme === 'Dark' ? color.common.white : color.darkBlue[1000]};

    ${atMinWidth.sm`
      ${font('display', 'md', '700')}
    `}
  }

  .subhead {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing[24]};

    strong {
      ${font('text', 'lg', '900')}
    }
  }
`;

export const Paragraph = styled.p`
  ${font('text', 'lg', '400')};
  color: ${({ theme }) =>
    theme === 'Dark' ? color.darkBlue[100] : color.darkBlue[600]};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: ${spacing[0]};
  margin: ${spacing[0]};
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${spacing[12]};
  ${font('text', 'lg', '400')};
  font-weigth: initial;
  color: ${color.darkBlue[600]};
  padding: ${spacing[0]};
  margin: ${spacing[0]};

  svg {
    transform: translateY(4px);
    min-width: 20px;
    max-width: 20px;
  }
`;
