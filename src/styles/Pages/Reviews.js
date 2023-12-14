import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  @media (max-width: 991px) {
    section:first-child {
      padding: 175px 0px 0px;
    }
  }
  .image_left,
  .image_right {
    max-width: fit-content;
    object-fit: cover !important;
  }
  .image_left {
    object-position: right;
    @media (max-width: 768px) {
      transform: translate(-400px, 0px);
    }
  }
  .image_right {
    object-position: left;
    @media (max-width: 768px) {
      transform: translate(400px, 0px);
    }
  }
`;
export const Section = styled.section`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 96px 0px;
  @media (max-width: 991px) {
    padding: 64px 0px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 370px 1fr;
  gap: 0px 30px;
  grid-template-areas: 'sidebar content';
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 0px 15px;
  margin: 0px auto;
  @media (max-width: 1200px) {
    grid-template-columns: 300px 1fr;
  }
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      'sidebar'
      'content';
  }
`;
export const Sidebar = styled.aside`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 500px;
  grid-area: sidebar;
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
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 500px;
  grid-area: content;
`;
export const Row = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #0b1a2b;
    @media (max-width: 499px) {
      display: none;
    }
  }
`;
export const PaginationWrapper = styled.div`
  .pagination {
    width: auto;
  }
`;
