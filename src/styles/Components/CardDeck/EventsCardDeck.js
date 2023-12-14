import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 0px;
  width: 100%;
  height: auto;
  background: #ffffff;
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 0 15px;
  }
  @media (max-width: 991px) and (min-width: 600px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  max-width: 1170px;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  max-width: 666px;
  height: auto;
  margin: 0px auto 40px;
  h2 {
    width: 100%;
    font-weight: bold;
    text-align: center;
    color: #0b1a2b;
    margin-bottom: 24px;
  }
  p {
    width: 100%;

    text-align: center;
    color: #707481;
    margin-bottom: 24px;
  }
`;
export const Grid = styled.div`
  padding: 0px;
  width: 100%;
  max-width: 1170px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
`;
