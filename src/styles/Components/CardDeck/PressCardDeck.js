import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 0px 15px;
  margin: 0px auto;
`;
export const Heading = styled.h2`
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 31.1px;
  line-height: 40px;
  color: #0b1a2b;
  margin-bottom: 40px;
`;
export const Grid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 0px 30px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px 0px;
  }
`;
