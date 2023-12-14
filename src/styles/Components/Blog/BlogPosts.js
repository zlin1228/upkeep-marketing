import { Container, Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Main = styled.div`
  padding-top: 96px;
`;
export const BlogContainer = styled(Container)`
  margin-top: 2rem;
`;
export const Banner = styled.header`
  width: 100%;
  height: 208px;
  min-height: 208px;
  padding: 0px;
  margin: 0px 0px 64px 0px;
  background: #00254c;
  @media (max-width: 768px) {
    height: 156px;
    min-height: 156px;
  }
`;
export const BannerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 0px 15px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h1 {
    font-style: normal;
    font-weight: bold;
    color: #ffffff;
    margin: 0px;
  }
`;
export const BlogPostsContainer = styled(Col)`
  @media (max-width: 768px) {
    order: 2;
    margin-top: 2rem;
  }
  .blog-item {
    padding: 48px 0 26px;
    border-bottom: 1px solid #eaeaec;
  }
  .intro-image {
    margin-top: 32px;
    margin-bottom: 40px;
    max-height: 400px;
    overflow: hidden;
    display: flex;
    img {
      object-fit: cover;
      object-position: center;
    }
  }
  .article-info {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 34px;
    .author-name {
      color: #3395ff;
      text-transform: capitalize;
    }
    .cat-name {
      font-weight: 600;
      font-size: 13.5px;
      line-height: 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #47b972;
      vertical-align: middle;
      padding: 6px 10px;
      background: #47b97210;
      display: inline-block;
      margin-block: 1rem;
    }
  }
  .article-intro {
    img {
      max-width: 100%;
      height: auto;
      overflow: hidden;
    }
  }
  .readmore {
    line-height: 18px;
    margin: 1rem 0rem;
    a {
      position: relative;
      font-size: 1rem;
      &:after {
        position: absolute;
        content: '';
        top: 50%;
        margin: auto;
        right: -16px;
        transform: translateY(-50%) rotate(45deg);
        transform-origin: bottom;
        width: 6px;
        height: 6px;
        border-top: 2px solid #3395ff;
        border-right: 2px solid #3395ff;
        transition: all 0.3s ease;
        @media (max-width: 768px) {
          top: 0;
          bottom: 0;
        }
      }
      &:before {
        position: absolute;
        content: '';
        top: 50%;
        left: calc(100% + 13px);
        width: 0;
        opacity: 0;
        border-bottom: 2px solid #3395ff;
      }
      &:hover {
        &:after {
          right: -24px;
        }
        &:before {
          animation-name: grow-right;
          animation-duration: 0.25s;
          animation-fill-mode: forwards;

          /*animations*/
          @keyframes grow-right {
            0% {
              opacity: 0;
              width: 0;
            }
            100% {
              opacity: 1;
              width: 12px;
            }
          }
        }
      }
    }
  }
`;

export const ImageHolder = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  margin-right: 12px;
  text-align: center;
  line-height: 48px;
  font-size: 20px;
  background: #eee;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
