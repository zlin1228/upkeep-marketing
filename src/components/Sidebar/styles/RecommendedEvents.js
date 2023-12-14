import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};
`;

export const Heading = styled.p`
  ${font('display', 'xs', '700')}
  color: ${color.darkBlue[1000]};
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  padding: ${spacing[0]};
  margin: ${spacing[0]};
  list-style: none;
`;

export const ListItem = styled.li`
  width: 100%;
  padding-bottom: ${spacing[16]};
  border-bottom: 1px solid ${color.grey[200]};

  &:hover {
    .heading {
      color: ${color.steel[700]};
    }
  }

  &:last-child {
    padding-bottom: ${spacing[0]};
    border-bottom: none;
  }

  .list-item-link {
    display: flex;
    align-items: center;
    gap: ${spacing[12]};
  }

  .thumbnail {
    width: 128px;
    height: 72px;

    .gatsby-image,
    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 16/9;
      object-position: left !important;
    }
  }

  .heading {
    ${font('text', 'sm', '500')}
    color: ${color.darkBlue[700]};
    transition: color 250ms ease-in-out;
  }
`;
