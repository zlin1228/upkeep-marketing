import styled from 'styled-components';
import { color } from '../../../../atoms/colors';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  min-height: 556px;
  height: auto;
  background: #fafcff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 2px 2px rgba(10, 16, 34, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
  }

  &.card_1,
  &.card_2,
  &.card_3,
  &.card_6,
  &.card_7,
  &.card_8 {
    grid-column: span 2;
    .card_thumbnail {
      position: relative;
      width: 100%;
      min-height: 210px;
      max-height: 210px;
      background: black;
      overflow: hidden;
      .gatsby-image-wrapper {
        position: initial !important;
      }
    }
  }

  &.card_4,
  &.card_5 {
    grid-column: span 3;
    @media (max-width: 991px) {
      grid-column: span 2;
    }
    .card_thumbnail {
      position: relative;
      width: 100%;
      min-height: 323px;
      max-height: 323px;
      overflow: hidden;
      @media (max-width: 991px) {
        min-height: 210px;
        max-height: 210px;
      }
      .gatsby-image-wrapper {
        position: initial !important;
      }
    }
  }

  .clickable {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 100;
  }

  .card_body {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    padding: 24px;
    width: 100%;
    height: 100%;

    .title {
      font-size: 21.6px;
      line-height: 32px;
      color: #282f3c;
      margin-bottom: 16px;
      text-transform: none;
    }

    .description {
      font-size: 18px;
      line-height: 26px;
      color: #707481;
    }
  }

  .card_author {
    width: 100%;
    align-self: flex-end;
  }

  .card_date {
    font-size: 14px;
    color: ${color.darkBlue[600]};
    margin-top: 16px;
    .date_heading {
      font-weight: bold;
      color: ${color.darkBlue[900]};
    }
  }
`;
