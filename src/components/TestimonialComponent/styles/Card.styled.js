import styled from 'styled-components';

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px;
  padding: 32px;
  background: #ffffff;
  border: 1px solid #eceef6;
  box-shadow: 0px 12px 32px rgba(45, 40, 77, 0.1);
  border-radius: 12px;
  @media (max-width: 992px) {
    max-width: 370px;
  }
  @media (max-width: 768px) {
    max-width: 300px;
  }
  @media (max-width: 675px) {
    max-width: 100%;
  }
  .stars {
    margin-bottom: 8px;
  }
  .star {
    width: auto;
    height: auto;
    margin-right: 6px;
  }
`;
export const Details = styled.div`
  width: 100%;
  height: auto;
`;
export const Heading = styled.h3`
  font-style: normal;
  min-height: 48px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #00254c;
  margin-bottom: 16px;
`;
export const Subhead = styled.div`
  &,
  & p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #00254c;
    margin-bottom: 16px;
  }
`;
export const Author = styled.div`
  width: 100%;
  height: auto;
`;
export const Name = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #007bff;
`;
export const Role = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;
