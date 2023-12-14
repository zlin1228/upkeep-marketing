import styled from 'styled-components';

export default styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 203.78px;
  height: 40px;
  margin: 0 auto;
  .active_page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-right: 24px;
    width: 40px;
    height: 40px;
    background: #ffffff;
    border-radius: 8px;
    border: none;
    outline: none;
    color: #0b1a2b;
    transition: 0.3s ease;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    &:focus {
      outline: none;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.75);
    }
  }
  .next_page {
    margin-right: 24px;
    border: none;
    outline: none;
    background: none;
    padding: 0;
    color: #a9acb1;
    transition: 0.3s ease;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    &:focus {
      outline: none;
    }
    &:hover {
      color: #ffffff;
    }
  }
  .elipsis {
    margin-right: 24px;
    color: #a9acb1;
    cursor: default;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
  }
  .paginate_next {
    border: none;
    outline: none;
    background: none;
    padding: 0;
    display: flex;
    align-items: center;
  }
`;
