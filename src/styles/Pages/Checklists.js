import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const Header = styled.div`
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
  padding-bottom: 150px;
  &.bg-black {
    background: #181c24;
  }
  h4 {
    font-weight: normal;
  }
`;

export const Grid = styled.div`
  margin-top: -85px;
  margin-bottom: 65px;
`;

export const ColumnRight = styled(Col)`
  @media screen and (max-width: 767px) {
    margin-bottom: 22px;
  }
`;
export const ChecklistHolder = styled.div`
  padding: 50px 0 0;
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-left: 30px;
    h5 {
      margin-bottom: 15px;
    }
    ul {
      padding: 0;
    }
    li {
      list-style: none;
      font-size: 15px;
      line-height: 18px;
      max-width: 270px;
      label {
        cursor: pointer;
      }
      input[type='checkbox'] {
        margin-right: 32px;
        vertical-align: text-top;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          display: block;
          width: 16px;
          height: 16px;
          left: 0;
          top: 2px;
        }
        &:after {
          content: '';
          position: absolute;
          display: block;
          width: 8px;
          height: 8px;
          left: 4px;
          top: 6px;
          transition: all 0.1s;
        }
      }
    }
    .filter-block {
      ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    }
    .filter-block.category {
      li {
        cursor: pointer;
        padding: 14px 24px;
        font-style: normal;
        font-weight: 400;
        font-size: 13.5px;
        line-height: 16px;
        color: #33394b;
        &:hover {
          color: #007bff;
          background: #007bff0c;
        }
        &.selected {
          color: #007bff;
          background: #007bff0c;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='%23007BFF' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
          background-position: 94% 50%;
          background-repeat: no-repeat;
          font-weight: 600;
        }
      }
    }
  }
  .footer-banner {
    background: #f5f7fb;
    padding: 90px 0;
    margin-top: 96px;
    h2 {
      margin-bottom: 64px;
    }
    .footer-card {
      border: 1px solid #e0e6ed;
      background: #fff;
      margin-bottom: 20px;
      .image-card {
        position: relative;
        overflow: hidden;
        background-color: #e6f2ff;
        width: 140px;
        height: 140px;
        box-shadow: -4px 0px 20px rgba(0, 0, 0, 0.15);
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #e6f2ff;
          }
        }
      }
      .card-cat-title {
        display: flex;
        justify-content: center;
        align-items: center;
        h6 {
          margin-bottom: 0;
          text-align: center;
        }
      }
    }
  }
`;
export const ChecklistContainer = styled.div`
  .banner-img {
    padding: 100px 0 50px;
    .header-cat-img-wrapper {
      padding: 15px;
      .overlay-bg {
        position: relative;
        transition: all 0.3s;
        &:hover {
          box-shadow: 0px 16px 24px rgba(51, 57, 75, 0.1);
        }
        .text-wrapper {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #fff;

          font-weight: bold;
          font-size: 32px;
          line-height: 42px;
          background-blend-mode: multiply;
          background-repeat: no-repeat;
          background-size: contain;
        }
        img {
          max-width: 100%;
        }
        &.overlay-red .text-wrapper {
          background-color: #ff3b30;
        }
        &.overlay-blue .text-wrapper {
          background-color: #007bff;
        }
        &.overlay-green .text-wrapper {
          background-color: #47b972;
        }
        &.overlay-yellow .text-wrapper {
          background-color: #f5c953;
        }
      }
    }
  }
  .btn {
    height: 48px;
    padding: 10px 18px;
  }
  .banner-wrapper {
    padding-bottom: 24px !important;
  }
  .common-search {
    margin-top: 24px;
    p {
      font-size: 15px;
      line-height: 22px;
    }
    .tag-container {
      span {
        font-weight: 600;
        font-size: 13.5px;
        line-height: 16px;
        background: #f9f9f9;
        margin-right: 8px;
        padding: 6px 10px;
      }
    }
  }
`;
