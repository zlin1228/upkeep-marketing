import styled from 'styled-components'
import { Link } from "gatsby";

export const Breadcrumbs = styled.div`
  padding-bottom: 24px;

  svg {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 25px;
  }
  .seperator{
    @media (max-width: 767.98px){
      display:none;
    }
  }
`;

export const BreadcrumbsLink = styled(Link)`
  line-height:27px;
  @media (min-width: 768px){
    white-space: nowrap;
  }
  @media (max-width: 767.98px){
    display:block;
  }
`;
export const BreadcrumbsText = styled.span`
  line-height:27px;
  @media (max-width: 767.98px){
    display:block;
  }
`;