import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  padding: 0px;
  margin: 0px;
  .breadcrumbs_container,
  .breadcrumbs {
    display: none;
  }
  .hero-container {
    padding-top: 220px;
    @media (max-width: 991px) {
      padding-top: 120px;
    }
    @media (max-width: 499px) {
      padding-top: 100px;
    }
  }
`;
export const Logo = styled.img`
  position: absolute;
  top: 100px;
  width: 100%;
  height: auto;
  max-height: 34.69px;
  display: grid;
  place-items: center;
  z-index: 100;
  margin-bottom: 64px;
  @media (max-width: 991px) {
    top: 32px;
  }
`;
export const Copyright = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  p {
    font-size: 14px;
    line-height: 21px;
    color: #515667;
    margin-bottom: 8px;
  }
  a {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #515667;
  }
`;
