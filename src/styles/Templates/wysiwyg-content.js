import styled from 'styled-components';


export const InnerContent = styled.div`
  margin-bottom: 32px;

  p, span {
    margin-bottom: 25px;
    line-height: 27px;

    @media screen and (max-width: 767px){
      }
  }

  a {
    line-height: 27px;

    @media screen and (max-width: 767px){
    }
  }

  h2 {
    margin-bottom: 25px;
    font-size: 31.1px;
    span{
      font-size:26px;
    }
    @media screen and (max-width: 767px){
      font-size: 28px;
    }
  }

  h3, h4 {
    margin-bottom: 25px;
    font-size: 26.1px;
    Line height: 39px;

    @media screen and (max-width: 767px){
      font-size: 24px;
    }
  }
  h5, h6{
    font-size: 20px;
    color:#2e2e2e;
    font-weight:bold;
  }
  .alert{
    font-size:20px;
    letter-spacing: -0.6px;
    font-weight:bold;
  }
  ul, ol {
    margin-bottom: 25px;
    list-style: none;
  }

  ul li, ol li {
    position: relative;
    line-height: 27px;

    :before {
      content: '•';
      left: -25px;
      position: absolute;
      display: block;
    }

    @media screen and (max-width: 767px){
    }
  }
  div{
    max-width:100%;
  }
  img {
    height: auto;
    max-width: 100%;
  }
  table.learning-table {
    width: 100%;
    border: 1px solid #2e2e2e;
    font-size: 16px;
    th:not(:last-child), td:not(:last-child) {
      border-right: 1px solid #2e2e2e;
    }
    th {
      border-bottom: 1px solid #2e2e2e;
    }
    tr:not(:last-child) td {
      border-bottom: 1px solid #2e2e2e;
    }
    td, th{
      padding: 8px;
    }
  }
`