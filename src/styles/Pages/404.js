import styled from 'styled-components';
import HeroBackground from '../../assets/background/404-background.svg';

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${HeroBackground});
  backrgound-size: cover;
  background-repeat: no-repeat;
  background-size: 110%;
  @media (max-width: 992px) {
    background-size: 180%;
  }
  .card-deck-section {
    background: transparent;
    padding-top: 0px;
  }
  .card-component {
    border: 2px solid #eceef6;
  }
  @media (max-width: 992px) {
    background-size: 180%;
    .card-deck-section {
      padding-top: 0px;
    }
    .card-deck-grid {
      max-width: 770px;
      grid-template-columns: 1fr;
    }
    .card-component-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .card-component-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
