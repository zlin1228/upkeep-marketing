import { Link } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const Grid = styled.section`
  width: 100%;
  max-width: 1170px;
  position: relative;
  height: 100%;
  margin: 0 auto;
  padding: 0px 0px 200px 0px;
  display: grid;
  grid-template-columns: repeat(3, 370px);
  gap: 30px 30px;
  grid-template-rows: [row1-start] 32px [row1-end row2-start] 100% [row2-end row3-start] 40px [row3-end];
  grid-template-areas:
    'header header header'
    'categories cards cards'
    'pagination pagination pagination';
  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 300px);
    max-width: 1024px;
  }
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    padding: 0px 40px 100px 40px;
    max-width: 1024px;
  }
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    padding: 0px 15px 100px 15px;
    max-width: 1024px;
  }
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    padding: 0px 15px 25px 15px;
    max-width: 1024px;
  }
  .grid_header {
    grid-area: header;
    max-height: 32px;
    display: flex;
    justify-content: space-between;
  }
  .grid_categories {
    grid-area: categories;
    position: sticky;
    top: 125px;
    height: 400px;
    overflow: hidden;
    @media (max-width: 991px) {
      position: relative;
      top: 0px;
    }
    .download_type {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 24px;
      height: 403px;
      background: #f9f9f9;
      border-radius: 12px;
      .download_type_heading {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0px;
        width: 100%;
        height: 27px;
        margin-bottom: 24px;
        strong,
        button {
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 24px;
        }
        strong {
          color: #0b1a2b;
        }
        button {
          color: #007bff;
          border: none;
          outline: none;
          background: none;
          padding: 0;
        }
      }
    }
    .checkboxes {
      width: 100%;
      height: auto;
    }
    hr {
      width: 100%;
      border: 1px solid #eaeaec;
      margin: 24px 0px;
    }
  }
  .grid_cards {
    grid-area: cards;
    display: grid;
    grid-template-columns: repeat(2, 370px);
    gap: 30px 30px;
    width: 100%;
    @media (max-width: 1250px) {
      grid-template-columns: repeat(2, 300px);
    }
    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 425px);
      grid-auto-rows: auto;
      gap: 15px 15px;
    }
    @media (max-width: 913px) {
      grid-template-columns: repeat(2, 400px);
      grid-auto-rows: auto;
    }
    @media (max-width: 855px) {
      grid-template-columns: repeat(2, 375px);
      grid-auto-rows: auto;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 400px);
      place-items: center;
      justify-content: center;
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 375px);
      place-items: center;
      justify-content: center;
    }
  }
  .grid_pagination {
    grid-area: pagination;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;
export const Categories = styled(Col)`
  .category_link {
    background: none;
    outline: none;
    border: none;

    font-size: 18px;
    line-height: 26px;
    color: #707481;
    padding: 0;
    margin: 0;
    text-align: left;
  }
`;
export const Category = styled(Row)`
  padding: 5px 0px 5px 10px;
  ${props =>
    props.active
      ? `border-left: 2px solid #007BFF;`
      : `border-left: 2px solid #EAEAEC;`}
`;
export const CardFrame = styled.div`
  padding-left: 0px;
  padding-right: 0px;
  background: #ffffff;
  border: 1px solid #eaeaec;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  transition: all 0.3s ease;
  position: relative;
  top: 0;
  &:hover {
    top: -28px;
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
  }
  @media (max-width: 992px) {
    margin-left: 15px;
    margin-right: 15px;
  }
  .card_head {
    img {
      object-fit: cover;
      height: 247px;
      width: 100%;
    }
  }
  .card_body {
    padding: 32px;
    .card_title {
      color: #33394b;
      margin-bottom: 16px;
    }
    .card_description {
      overflow-wrap: break-word;
      p {
        color: #707481;
      }
    }
  }
  .author {
    height: 50px;
    display: flex;
    align-items: center;

    margin-top: 1rem;
  }
  .author_details {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .author_headshot {
    height: 50px !important;
    width: 50px !important;
    margin-right: 8px;
    display: flex;
    position: relative;
    transform: translateY(5px);
    img {
      height: 40px !important;
      width: 40px !important;
      border-radius: 9999px;
      object-fit: cover;
    }
    .gatsby-image-wrapper {
      overflow: visible !important;
    }
  }
  .author_name {
    font-size: 14px;
    line-height: 14px;
    color: #33394b;
    font-weight: bold;
  }
  .author_role {
    font-size: 14px;
    line-height: 14px;
    color: #707481;
  }
`;
export const Clickable = styled(Link)`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 100;
`;
export const ViewWrapper = styled(Row)`
  width: 67.5%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ViewMore = styled.button`
  position: relative;
  display: block;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
  line-height: 20px;
  color: #3395ff;
  &:hover {
    color: #0356b3;
    background: none;
    border-bottom: 2px solid #0356b3;
  }
`;
export const AuthorWrapper = styled.div`
  padding: 0px 24px;
  margin-bottom: 4px;
`;
