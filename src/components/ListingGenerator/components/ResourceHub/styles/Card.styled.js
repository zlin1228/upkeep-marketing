import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { color } from '../../../../../atoms/colors';

export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #eceef6;
  border-radius: 12px;
  overflow: hidden;
  transition: all 300ms ease-in-out;
  ${props => props.layout === '2x3' && `grid-column: span 2;`}
  ${props =>
    props.layout === '2x3' && props.index === 0 && `grid-column: span 3;`}
  ${props =>
    props.layout === '2x3' && props.index === 1 && `grid-column: span 3;`}
  &:hover {
    box-shadow: 0px 2px 56px rgba(40, 47, 60, 0.1);
  }
  @media (max-width: 992px) {
    min-height: auto;
    grid-column: span 1;
    flex-direction: column;
    ${props => props?.type === 'blog' && props?.index === 4 && `display: none;`}
    ${props =>
      props?.type === 'templates' && props?.index === 4 && `display: none;`}
  }
  @media (max-width: 576px) {
    ${props => props?.index > 2 && `display: none;`}
  }
`;
export const Clickable = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0px;
  z-index: 100;
`;
export const Image = styled.div`
  width: 100%;
  height: auto;
  .gatsby-image {
    aspect-ratio: 16 / 9;
  }
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ${props => (props.type === 'learning' ? `padding: 24px;` : `padding: 32px;`)};
`;
export const Text = styled.div`
  width: 100%;
  height: auto;
  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #0d141a;
    margin-bottom: 16px;
  }
  .subhead {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #515667;
    margin-bottom: 16px;
  }
`;
export const Tags = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const Tag = styled.h5`
  font-weight: 700;
  font-size: 13.5px;
  line-height: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0px 24px 16px 0px;
  ${props => (props?.index === 0 ? `color: #007bff;` : `color: #8c8c8c;`)}
  &:last-child {
    margin-right: 0px;
  }
`;
export const Button = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #007bff;
  svg {
    margin-left: 9px;
  }
`;

export const Date = styled.div`
  font-size: 14px;
  color: ${color.darkBlue[600]};
  margin-top: 16px;
  .date-heading {
    font-weight: bold;
    color: ${color.darkBlue[900]};
  }
`;
