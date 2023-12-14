import styled from 'styled-components';
import { Link } from 'gatsby';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 15px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  height: auto;
  margin: 0 auto;
  h2 {
    text-align: center;
    margin-bottom: 48px;
  }
`;
export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: flex;
  }
`;
export const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 992px) {
    flex-direction: column;
    display: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin: 0 15px;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e9eaed;
  border-radius: 16px;
  @media (max-width: 992px) {
    margin: 0 111px;
  }
  @media (max-width: 576px) {
    margin: 0 32px;
  }
  tr:first-child {
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }
  tr:last-child {
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  tr:nth-child(even) {
    background: #f9f9f9;
  }
  tr {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px 32px 15px 32px;
    width: 100%;
    height: auto;
    min-height: 64px;
    background: #ffffff;
    @media (max-width: 576px) {
      padding: 15px;
    }
    p {
      margin: 0;
    }
    td {
      flex-basis: 50%;
      display: flex;
      align-items: center;
    }
    .product_title {
      width: 100%;
      height: auto;

      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #0b1a2b;
      padding-right: 15px;
    }
    .product_description {
      width: 100%;
      height: auto;

      font-style: normal;
      font-weight: normal;
      font-size: 11.5px;
      line-height: 17.25px;
      color: #0b1a2b;
      padding-left: 15px;
    }
  }
`;
export const Cta = styled(Link)`
  width: fit-content;
  height: auto;
  padding: 12px 24px;
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #fafafa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #007bff;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  border-radius: 4px;
  margin: 24px auto;
  svg {
    margin-left: 8px;
  }
  &:hover {
    color: #fafafa;
    background: #0056b3;
  }
`;
