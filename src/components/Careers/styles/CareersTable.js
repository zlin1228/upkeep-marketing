import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 90px 15px;
  background: #ffffff;
  h2 {
    font-weight: bold;
    font-size: 44.79px;
    line-height: 49px;
    text-align: center;
    color: #0b1a2b;
    margin-bottom: 44px;
    @media (max-width: 768px) {
      font-size: 1.602em;
      margin: 0 0 24px 0;
    }
  }
`;
export const Table = styled.table`
  width: 100%;
  max-width: 771px;
  height: auto;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
  border-radius: 12px;
  overflow: hidden;
  thead {
    width: 100%;
    height: auto;
    display: flex;
    background: #33394b;
    padding: 21px 33px;
    tr th {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #ffffff;
    }
  }
  tbody {
    tr {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 24px 33px;
      background: #f5f6f9;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background: #dbdde0;
      }
    }
    a {
      position: absolute;
      inset: 0px;
      width: 100%;
      height: 100%;
    }
    tr td {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #515667;
    }
    tr td:last-child {
      text-align: right;
    }
  }
`;
