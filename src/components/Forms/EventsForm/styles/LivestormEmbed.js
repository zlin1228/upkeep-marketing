import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Heading = styled.h2`
  width: 100%;
  font-weight: bold;
  font-size: 31.1px;
  line-height: 40px;
  color: #0b1a2b;
  text-align: center;
  margin-bottom: 24px;
`;
export const Iframe = styled.iframe`
  max-width: 768px;
  height: 1000px;
  margin: 0 auto;
  @media (max-width: 992px) {
    height: 600px;
  }
  @media (max-width: 576px) {
    height: 1000px;
  }
`;
