import styled from 'styled-components';
import { Link } from 'gatsby';

const backgroundImage = {
  'Dark Blue':
    'background: url(https://www.datocms-assets.com/38028/1623084097-darkbluebackground.svg);',
  'Light Blue':
    'background: url(https://www.datocms-assets.com/38028/1623084111-lightbluebackground-svg.svg);',
};
const backgroundColor = {
  'Dark Blue': '  background: #00254c;',
  'Light Blue': 'background: #E6F2FF;',
};
const headingMappings = {
  'Dark Blue': 'color: #CCE5FF;',
  'Light Blue': 'color: #00254C;',
};
const bodyTextMappings = {
  'Dark Blue': 'color: #EAEAEC;',
  'Light Blue': 'color: #515667;',
};
const ctaMappings = {
  'Dark Blue': `
      color: #e6f2ff;
      &:after {
        border-top: 2px solid #e6f2ff;
        border-right: 2px solid #e6f2ff;
      }
      &:before {
        border-bottom: 2px solid #e6f2ff;
      }
      `,
  'Light Blue': `
      color: #004A99;
      &:after {
        border-top: 2px solid #004A99;
        border-right: 2px solid #004A99;
      }
      &:before {
        border-bottom: 2px solid #004A99;
      }
      `,
};
export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 15px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  height: auto;
  margin: 0px auto;
  ${props => backgroundColor[props?.theme]}
  border-radius: 20px;
  overflow: hidden;
`;
export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 446px;
  ${props => backgroundImage[props?.theme]}
  background-position: center;
  box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
  padding: 63px 83px;
  @media (max-width: 761px) {
    padding: 63px 30px;
  }
  &:hover {
    .animated-link {
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
`;
export const Clickable = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  z-index: 100;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: 100%;
  max-width: 430px;
  h5 {
    width: 100%;
    height: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    ${props => headingMappings[props?.theme]}
    margin-bottom: 24px;
  }

  h2 {
    width: 100%;
    height: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 37.32px;
    line-height: 48px;
    ${props => headingMappings[props?.theme]}
    margin-bottom: 24px;
  }

  div {
    width: 100%;
    height: auto;

    font-style: normal;
    font-weight: normal;
    font-size: 21.6px;
    line-height: 32px;
    color: #eaeaec;
    ${props => bodyTextMappings[props?.theme]}
    margin-bottom: 24px;
  }
`;
export const CallToAction = styled(Link)`
  position: relative;
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  ${props => ctaMappings[props?.theme]}
  &:hover {
    ${props => ctaMappings[props?.theme]}
    opacity: 0.75;
  }
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
    transition: all 0.3s ease;
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
  }
`;
