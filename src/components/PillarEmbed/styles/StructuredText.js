import styled from 'styled-components';

import { richTextStyles } from '../../../atoms/typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${richTextStyles}
`;
export const Asset = styled.div`
  width: 100%;
  height: auto;
  margin: 40px auto;
  &:first-child {
    margin-top: 0px;
  }
`;
export const CardDeckWrapper = styled.div`
  width: 100%;
  height: auto;
  .card-deck-section {
    width: 100%;
    height: auto;
    padding: 24px 0px;
    margin: 0px;
  }
  .card-deck-wrapper {
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 0px;
    margin: 0px;
  }
  .card-deck-heading,
  .cardDeck-subhead {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 0px;
    text-align: left;
  }
  .card-deck-grid {
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export const ConversionWrapper = styled.div`
  margin-top: 48px;
  @media (max-width: 991px) {
    display: none;
  }
`;
