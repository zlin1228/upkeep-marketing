import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: auto;
  padding: 0px;
  margin: 0px;
`;
export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 0px 15px;
  display: grid;
  grid-template-columns: 370px 1fr;
  grid-auto-rows: auto;
  gap: 30px;
  grid-template-areas: 'sidebar content';
  @media (max-width: 1200px) {
    grid-template-columns: 300px 1fr;
  }
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'sidebar'
      'content';
  }
`;
export const Row = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 32px 15px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    margin: 0px;
  }
`;
export const Card = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px 0px;
  padding: 24px;
  width: 100%;
  height: fit-content;
  background: #ffffff;
  border: 1px solid #eaeaec;
  border-radius: 12px;
  @media (max-width: 991px) {
    position: relative;
    top: 0px;
    margin-bottom: 30px;
  }
`;
export const Sidebar = styled.aside`
  grid-area: sidebar;
  position: relative;
  height: fit-content;
  overflow: hidden;
  @media (max-width: 991px) {
    position: relative;
    top: 0px;
  }
  .download_type {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    height: 403px;
    background: #f9f9f9;
    border-radius: 12px;
    .download_type_heading {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0px;
      width: 100%;
      height: 27px;
      margin-bottom: 24px;
      strong,
      button {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
      }
      strong {
        color: #0b1a2b;
      }
      button {
        color: #007bff;
        border: none;
        outline: none;
        background: none;
        padding: 0;
      }
    }
  }
  .checkboxes {
    width: 100%;
    height: auto;
  }
  hr {
    width: 100%;
    border: 1px solid #eaeaec;
    margin: 24px 0px;
  }
`;
export const Grid = styled.div`
  grid-area: content;
  width: 100%;
  height: auto !important;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 30px;
  @media (max-width: 768px) {
    display: block;
  }
  .pagination {
    width: 100%;
    grid-column: span 2;
  }
`;
export const Loading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: span 2;
`;
export const Newsletter = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 96px 15px;
  margin: 0px auto;
`;
