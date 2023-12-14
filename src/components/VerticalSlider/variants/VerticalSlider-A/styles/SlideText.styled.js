import styled from 'styled-components';

import { font } from '../../../../../atoms/typography';
import { color } from '../../../../../atoms/colors';
import { spacing } from '../../../../../atoms/spacing';

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[24]};

  .eyebrow {
    ${font('overline', 'md', '700')};
    color: ${color.steel[800]};
  }

  .heading,
  .heading * {
    ${font('display', 'md', '700')};
    color: ${color.darkBlue[1000]};
  }

  .subhead,
  .subhead * {
    ${font('text', 'lg', '400')};
    color: ${color.darkBlue[600]};
  }
`;

export const Paragraph = styled.p`
  ${font('text', 'lg', '400')};
  color: ${color.darkBlue[600]};
`;

export const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  ${font('text', 'lg', '400')};
  color: ${color.darkBlue[600]};
  padding: 0px;
  margin: 0px;
  img {
    transform: translateY(2.5px);
  }
`;
