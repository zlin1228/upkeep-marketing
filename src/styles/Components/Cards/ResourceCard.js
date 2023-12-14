import styled from 'styled-components';
import { Link } from 'gatsby';

export const CardFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 544px;
  border-radius: 12px;
  overflow: hidden;
  margin-right: 1.5rem;
  padding-left: 0px;
  padding-right: 0px;
  background: #fafcff;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
  }
  @media (max-width: 499px) {
    height: auto !important;
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
  padding: 0px;
  width: 100%;
  height: 16px;
  margin-bottom: 16px;
  .card_type {
    width: 68px;
    height: 16px;

    font-style: normal;
    font-weight: 600;
    font-size: 13.5px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #4945fb;
    margin-right: 24px;
  }
  .card_category {
    width: 120px;
    height: 16px;

    font-style: normal;
    font-weight: 600;
    font-size: 13.5px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #a9acb1;
    margin-left: 24px;
  }
`;
export const CardHead = styled.div`
  height: 208px;
  overflow: hidden;
  position: relative;
  .gatsby-image-wrapper {
    height: 247px;
    object-position: top !important;
    img {
      object-fit: cover;
      object-position: top !important;
      max-height: 247px !important;
      width: 100%;
    }
  }
  img {
    object-fit: cover;
    object-position: top !important;
    height: 247px;
    width: 100%;
  }
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  height: 224px;
  @media (max-width: 575px) {
    height: 100%;
  }
  .card_title {
    font-style: normal;
    font-weight: bold;
    font-size: 21.6px;
    line-height: 32px;
    color: #0b1a2b;
    margin-bottom: 16px;
  }
  .card_description {
    height: 78px;

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
    @media (max-width: 575px) {
      height: 100%;
    }
  }
`;
export const AuthorWrapper = styled.div`
  padding: 24px;
`;
export const Clickable = styled(Link)`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 100;
`;
