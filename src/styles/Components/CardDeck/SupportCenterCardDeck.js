import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding-bottom: 96px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0px auto;
  padding: 0px 15px;
`;
export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 44px;
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 25.92px;
    line-height: 32px;
    color: #0b1a2b;
    margin-bottom: 0px;
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
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const SupportLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #004a99;
  span {
    font-weight: bold;
  }
  li::marker {
    font-weight: bold;
  }
`;
