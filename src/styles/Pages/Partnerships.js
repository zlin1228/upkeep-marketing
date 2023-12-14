import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding-bottom: 96px;
  @media (max-width: 991px) {
    padding-bottom: 48px;
  }
  @media (max-width: 499px) {
    padding-bottom: 32px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 0px 15px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-auto-rows: auto;
  gap: 130px;
  @media (max-width: 1200px) {
    gap: 30px;
  }
  @media (max-width: 991px) {
    grid-template-columns: 200px 1fr;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
export const Sidebar = styled.div`
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
export const Grid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 30px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
