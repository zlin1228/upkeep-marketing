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
  @media (max-width: 991px) and (min-width: 600px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: auto;
  padding: 0px 15px;
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
  margin-bottom: 72px;
  margin: 0 auto;
  h2 {
    width: 100%;
    font-weight: bold;
    font-size: 44px;
    line-height: 56px;
    text-align: center;
    color: #0b1a2b;
    margin-bottom: 24px;
  }
  p {
    width: 100%;

    font-size: 21.6px;
    line-height: 32px;
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
  margin-top: 72px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .blog-card {
    min-height: auto;
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
