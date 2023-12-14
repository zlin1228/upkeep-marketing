import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #33394b;
    margin-bottom: 16px;
  }
`;
export const Row = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;
export const Link = styled.a`
  width: fit-content;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
