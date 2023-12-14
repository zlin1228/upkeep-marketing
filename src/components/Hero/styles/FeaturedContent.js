import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const FeaturedContentStyles = styled(Col)`
  height: 376px;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  padding: 0;
  position: relative;
  ${props => (props.reverse ? 'order: 2;' : 'order: 1;')}
  @media (max-width: 991px) {
    order: 2;
  }
  @media (max-width: 768px) {
    margin: 0 15px;
    height: auto;
    margin-top: 8px;
  }
  img {
    object-fit: cover;
    width: 100%;
    max-width: 100%;
  }
  .gatsby-image-wrapper {
    position: initial !important;
    img {
      object-position: top !important;
    }
  }
`;

export const FeaturedTag = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  height: 37px;
  background: #007bff;
  border-radius: 0px 12px;
  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
