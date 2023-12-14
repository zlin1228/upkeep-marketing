import styled from 'styled-components';

export default styled.ul`
  width: 100%;
  height: auto;
  margin: 64px 0px 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  strong {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #0b1a2b;
    padding-bottom: 16px;
    border-bottom: 1px solid #eeeeee;
  }
  li {
    border-bottom: 1px solid #eeeeee;
    &:last-child {
      border-bottom: none;
    }
  }
  li a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 16px 0px;
    z-index: 9999;

    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #222222;
    transition: all 0.3s ease;
    &:hover {
      color: #007bff;
    }
  }
`;
