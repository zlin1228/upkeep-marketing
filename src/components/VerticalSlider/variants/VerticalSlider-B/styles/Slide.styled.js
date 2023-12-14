import styled from 'styled-components';

import { spacing } from '../../../../../atoms/spacing';
import { color } from '../../../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  padding: ${spacing[32]} ${spacing[0]};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  padding: ${spacing[24]};
  border-radius: ${spacing[20]};
  background-color: ${color.common.transparent};
  transition: background-color 0.3s ease-in-out;

  &.active {
    background-color: ${color.common.white};
  }

  img,
  .gatsby-image {
    width: fit-content;
    max-height: 350px;
    aspect-ration: 16/9;
    object-fit: contain !important;
    margin: ${spacing[0]} auto;
  }
`;
