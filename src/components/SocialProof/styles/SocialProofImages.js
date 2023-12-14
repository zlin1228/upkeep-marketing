import styled from 'styled-components';
import { Link } from 'gatsby';

export const Images = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  gap: ${props => (props.clickable ? '0px 56px' : '0px 16px')};
  @media (max-width: 991px) {
    ${props =>
      props.clickable &&
      `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  `};
  }
`;
export const ClickableImageHolder = styled(Link)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 40px;
  position: relative;
  background: #ffffff;
  border: 1px solid #eaeaec;
  border-radius: 12px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    img {
      object-fit: contain !important;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &.image-1 {
    width: 96px;
    margin: 0 10px;
    &.sm-social {
      width: 80px;
    }
  }
  &.image-2 {
    width: 110px;
  }
  &.image-3 {
    width: 200px;
  }
`;
export const ImageHolder = styled.div`
  width: 100%;
  height: auto;
  max-height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    img {
      object-fit: contain !important;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &.image-1 {
    width: 96px;
    margin: 0 10px;
    &.sm-social {
      width: 80px;
    }
  }
  &.image-2 {
    width: 110px;
  }
  &.image-3 {
    width: 200px;
  }
`;
