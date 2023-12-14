import styled from 'styled-components';

import { richTextStyles } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Main = styled.main`
  padding: 0px;
`;

export const BodySection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  padding-top: ${props => (props.showCase ? '96px' : '0px')};
  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;

export const BodyWrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};

  display: flex;
  flex-direction: column-reverse;
  gap: ${spacing[32]};

  margin: ${spacing[0]} auto;
  padding: 0px ${spacing[16]};

  ${atMinWidth.sm`
    padding: 0px ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
    display: grid;
    grid-template-columns: 270px 1fr;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${richTextStyles}
`;
