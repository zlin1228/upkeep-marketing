import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 32px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #33394b;
    margin-bottom: 8px;
  }
  h6 {
    width: fit-content;
    height: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #33394b;
    margin-bottom: 8px;
  }
`;
