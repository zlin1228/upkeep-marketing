import styled from 'styled-components';
import { Link } from 'gatsby';

export const SearchBox = styled.div`
  position: relative;
  input.MuiOutlinedInput-input[type='text'] {
    border-radius: 25px;
    padding-left: 12px;
    padding-right: 22px;
    font-size: 18px;
  }
  .input-icon {
    position: absolute;
    right: 22px;
    top: 16px;
    color: #007bff;
    z-index: 10;
  }
`;
export const SearchHeader = styled.div`
  margin-top: 40px;
  margin-bottom: 48px;
  h3 {
    margin-bottom: 20px;
  }
`;
export const ContentWrapper = styled.div`
  & > .col-sm-6 {
    margin-bottom: 30px;
  }
  .learning-list {
    max-width: 470px;
    border-top: 1px solid #eaeaec;
    padding-top: 8px;
  }
  .learning-card {
    border: 1px solid #eee;
    display: block;
    padding: 30px 24px;
    height: 100%;
    color: #888;
    font-size: 16px;
    &:hover {
      border-color: #0b7bff;
      box-shadow: 0 5px 18px 0 #00000023;
    }
    h3 {
      color: #000;
      font-size: 20px;
    }
  }
  .resultBlock {
    padding: 16px 0;
    border-bottom: 1px solid #eaeaec;
    h4 {
      color: #007bff;
      font-size: 18px;
      font-weight: 600px;
      line-height: 27px;
      margin-bottom: 8px;
    }
    h1,
    h2 {
      display: none;
    }
    .post-body {
      font-size: 15px;
      line-height: 22px;
      p {
        margin: 0;
      }
      h2 + p + p {
        display: none;
      }
    }
  }
`;
export const Sidebar = styled.div`
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
export const Box = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    padding-bottom: 14px;

    &:last-child {
      padding-bottom: 0px;
    }

    &:first-child {
      padding-top: 14px;
    }

    a {
      color: #000;
    }
  }
`;
export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 16px;
  font-size: 15px;
  .seperator {
    padding: 0 8px;
  }
`;
export const BreadcrumbsLink = styled(Link)``;
