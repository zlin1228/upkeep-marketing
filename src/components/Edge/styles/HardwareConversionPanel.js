import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  background: #060606;
  padding: 96px 0px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 15px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 48px;
  width: 100%;
  max-width: 1170px;
  height: auto;
  min-height: 260px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  margin: 0px auto;
  text-align: center;
  h2,
  p {
    color: #fafafa;
    margin-bottom: 24px;
  }
  a {
    display: inline-block;
    text-align: center;
    padding: 10px 24px;
    width: auto;
    min-width: 170px;
    min-height: 41px;
    background: #007bff;
    box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
    border-radius: 4px;
    color: #fafafa !important;
    transition: all 0.3s ease;
    &:hover {
      background: #0056b3;
    }
  }
`;
