import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';

const backgroundColorMappings = {
  white: 'background: #FFFFFF;',
  blue: 'background: #007BFF;',
};
const titleColorMappings = {
  white: 'color: #0B1A2B;',
  blue: 'color: #FFFFFF;',
};
const descripitionColorMappings = {
  white: 'color: #707481;',
  blue: 'color: #FFFFFF;',
};
const ctaColorMappings = {
  white: 'color: #007BFF;',
  blue: 'color: #FFFFFF;',
};
const animateAfterColorMappings = {
  white: `
  border-top: 2px solid #007BFF;
  border-right: 2px solid #007BFF;
`,
  blue: `
  border-top: 2px solid #FFFFFF;
  border-right: 2px solid #FFFFFF;
`,
};
const animateBeforeColorMappings = {
  white: `
  border-bottom: 2px solid #007BFF;
`,
  blue: `
  border-bottom: 2px solid #FFFFFF;
`,
};
export const CaseStudyHeading = styled(Col)`
  max-width: 575px;
  margin: 0 auto 50px auto;
  padding: 0;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0px 15px;
    margin: 0 auto 50px auto;
  }
  .heading_kicker {
    text-transform: uppercase;
    color: #007bff;
  }
  .heading {
    font-size: 44.79px;
    color: #0b1a2b;
    @media (max-width: 991px) {
      font-size: 1.602em;
      margin: 0 0 24px 0;
    }
  }
  .subhead {
  }
`;
export const CardsRow = styled(Row)`
  padding: 0px 15px;
  &.cards_row {
    gap: 1rem;
  }
`;
export const CardFrame = styled(Col)`
  position: relative;
  background: #ffffff;
  border: 1px solid #eaeaec;
  ${props => backgroundColorMappings[props.background]}
  padding: 40px;
  transition: box-shadow 0.3s ease;
  @media (min-width: 768px) {
    &.col-md-5 {
      flex: 0 0 45%;
      max-width: 45%;
    }
  }
  @media (max-width: 768px) {
    &.col-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  .card_heading {
    font-size: 25.92px;
    line-height: 32px;
    color: #000000;
    font-weight: bold;
    margin-bottom: 24px;
  }
  .card_title {
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    @media (max-width: 991px) {
      font-size: 1.602em;
      line-height: initial;
    }
    ${props => titleColorMappings[props.background]}
  }
  .card_description {
    font-size: 18px;
    line-height: 26px;
    ${props => descripitionColorMappings[props.background]}
  }
  .card_cta {
    margin: 0 auto;
    font-size: 14px;
    text-align: center;
    ${props => ctaColorMappings[props.background]}
    position: relative;
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
      ${props => animateAfterColorMappings[props.background]}
      transition: all 0.3s ease;
    }
    &:before {
      position: absolute;
      content: '';
      top: 50%;
      left: calc(100% + 13px);
      width: 0;
      opacity: 0;
      ${props => animateBeforeColorMappings[props.background]}
    }
  }
  .features_list {
    list-style: none;
    padding: 0;
  }
  .feature_title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #33394b;
  }
  .feature_description {
    font-size: 18px;
    line-height: 26px;
    color: #707481;
    margin-left: 1.75rem;
  }
  ${props =>
    props.hoverable &&
    `
  &:hover {
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
    .animation-link {
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
`}
`;
export const Clickable = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
`;
