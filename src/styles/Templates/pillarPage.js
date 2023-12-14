import styled from 'styled-components';

export const RichTextBlock = styled.section`
  margin: 64px 0rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-style: normal;
    font-weight: bold;
    color: #00254c;
    margin-bottom: 40px;
  }

  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 25.92px;
    line-height: 32px;
    color: #00254c;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #515667;
    margin-bottom: 40px;
  }
  blockquote {
    border-left: 4px solid #004a99;
    padding-left: 40px;

    p {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #004a99;
    }
  }
  iframe {
    width: 100%;
    height: 400px;
    margin: 50px 0px;
    @media (max-width: 991px) {
      height: 300px;
    }
  }
  img {
    width: 100%;
    height: 400px;
    margin: 50px 0px;
    @media (max-width: 991px) {
      height: auto;
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1170px;
  margin: 0 auto;
  @media (max-width: 1250px) {
    max-width: 1105px;
  }
  @media (max-width: 1200px) {
    max-width: 991px;
  }
  @media (max-width: 991px) {
    max-width: 720px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-areas: 'content sidebar';
  grid-template-columns: 670px 370px;
  grid-column-gap: 130px;
  @media (max-width: 1250px) {
    grid-column-gap: 65px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 617px 308px;
    grid-column-gap: 65px;
  }
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
  }
  .content {
    grid-area: content;
    margin-bottom: 50px;
  }
  .sidebar {
    grid-area: sidebar;
    .subscription_card {
      margin-top: 0;
    }
  }
`;

export const TableWrapper = styled.div`
  position: sticky;
  top: 100px;
  margin-bottom: 50px;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const SidebarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 100%;
  height: 420px;
  background: #ffffff;
  border: 1px solid #e0e6ed;
  box-sizing: border-box;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  margin-bottom: 40px;
  .thumbnail {
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    position: static;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
    h4 {
      position: static;
      font-style: normal;
      font-weight: bold;
      font-size: 25.92px;
      line-height: 32px;
      color: #33394b;
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
      margin: 8px 0px;
    }
    .callToAction {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      position: static;
      flex: none;
      order: 3;
      flex-grow: 0;
      margin: 8px 0px;
      a {
        position: static;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: #007bff;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin-right: 8px;
      }
    }
  }
`;

export const HeroStyles = styled.div`
  h1 {
    font-size: 42px !important;
  }
`;

export const TableOfContentCTA = styled.div`
  width: 100%;
  height: auto;
  max-height: 21px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 21px;
    height: 21px;
    margin-right: 12px;
  }
  a {
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    color: #00254c;
    &:after {
      border-color: #00254c;
    }
    &:before {
      border-bottom: 2px solid #00254c;
    }
    &:hover {
      &:before {
        border-color: #00254c;
      }
      &:after {
        border-color: #00254c;
      }
    }
  }
`;
