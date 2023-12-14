import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const BlogSearch = styled(Col)`
  position: sticky;
  top: 200px;
  height: 200px;
  margin-left: 2rem;
  padding-left: 0;
  padding-right: 0;
  .searchBox {
    width: 100%;
    top: 0;
  }
  @media (max-width: 768px) {
    order: 1;
    margin: 0rem 1rem;
    position: relative;
    height: auto;
    top: 0;
  }
`;
export const SearchButton = styled.div`
  position: absolute;
  padding: 12px 24px;
  right: 0;
  cursor: pointer;
`;
