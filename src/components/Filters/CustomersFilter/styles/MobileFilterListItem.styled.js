import styled from 'styled-components';

export const ListItem = styled.li`
  width: 100%;
  height: auto;
  .dropdown-btn {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: none;
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #0d141a;
    padding: 17px 0px;
    margin: 0px;
    &:focus,
    &:hover {
      outline: none;
      background: none;
      color: #0d141a;
    }
    img {
      margin-right: 6px;
    }
  }
  .dropdown {
    overflow: scroll;
    max-height: 350px;
  }
`;
