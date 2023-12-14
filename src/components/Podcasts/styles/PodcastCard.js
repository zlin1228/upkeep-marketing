import styled from 'styled-components';
import { Link } from 'gatsby';

export const CardFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #172536;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
  }
`;
export const CardCategory = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12.5px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 16px 0px;
  width: 100%;
  height: auto;
  min-height: 16px;
  overflow: scroll;
  white-space: nowrap;
  z-index: 101;
  .card_type {
    width: 68px;
    height: 16px;

    font-style: normal;
    font-weight: 600;
    font-size: 13.5px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #f695ce;
    margin-right: 24px;
  }
  .card_category {
    width: fit-content;
    height: 16px;

    font-style: normal;
    font-weight: 600;
    font-size: 13.5px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #a9acb1;
  }
`;
export const CardHead = styled.div`
  width: 100%;
  height: auto;
  min-height: 208px;
  overflow: hidden;
  position: relative;
  display: flex;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-position: top !important;
    object-fit: cover;
    img {
      object-fit: cover;
      object-position: top !important;
      width: 100%;
    }
  }
  img {
    object-position: top !important;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const CardBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  .author_name {
    color: #ffffff;
  }
`;
export const CardDetails = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .card_title {
    width: 100%;
    height: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 21.6px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 16px;
  }
  .card_description {
    width: 100%;
    height: auto;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #a9acb1;
    margin-bottom: 16px;
    p {
      font-size: 18px;
      line-height: 26px;
      color: #a9acb1;
    }
  }
`;
export const Author = styled.div`
  min-height: 40px;
  max-height: 40px;
  height: 40px;
  display: flex;
  align-items: center;

  margin-top: 1rem;
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
      object-fit: cover !important;
    }
    .gatsby-image-wrapper {
      overflow: visible !important;
    }
  }
  .author_name {
    font-size: 14px;
    line-height: 14px;
    color: #ffffff;
    font-weight: bold;
  }
  .author_role {
    font-size: 14px;
    line-height: 14px;
    color: #ffffff;
  }
`;
export const Clickable = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 100;
`;
