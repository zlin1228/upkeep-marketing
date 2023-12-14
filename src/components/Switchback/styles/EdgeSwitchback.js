import styled from 'styled-components';

const sectionThemes = {
  White: 'background: #fff;',
  Dark: 'background: #060606;',
  'White Blue': 'background: #007bff;',
};
const textThemes = {
  heading: {
    White: 'color: #060606;',
    Dark: 'color: rgb(250, 250, 250);',
    Blue: 'color: #fff;',
  },
  subhead: {
    White: 'color: #060606;',
    Dark: 'color: #fafafa;',
    Blue: 'color: #fff;',
  },
};
export const Section = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 670px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 96px 0px;
  ${props => sectionThemes[props?.theme]}
  @media (max-width: 768px) {
    padding: 32px 0px;
  }
`;
export const GradientBackground = styled.div`
  position: absolute;
  ${props =>
    props.reverse ? 'right: 0px; transform: rotate(180deg);' : 'left: 0px;'}
  width: 100%;
  max-width: 534px;
  height: 100%;
  max-height: 670px;
  min-height: 670px;
  background-image: url('https://www.datocms-assets.com/38028/1640311353-edge-switchback-gradient.png');
  background-repeat: no-repeat;
  z-index: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    position: absolute;
    bottom: 35px;
    right: 0px;
    left: 0px;
    min-height: auto;
    transform: rotate(0deg);
    background-position: bottom;
    background-size: cover;
    width: 92%;
    height: 100%;
    max-height: auto;
    margin: 0 auto;
    border-radius: 12px;
  }
  @media (max-width: 850px) {
    max-height: 360px;
  }
  @media (max-width: 499px) {
    bottom: 48px;
    max-height: 230px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  z-index: 2;
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  gap: 0px 100px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0px 15px;
  @media (max-width: 991px) {
    flex-direction: column-reverse;
    padding: 0px 15px 75px;
  }
`;
export const ContentLeft = styled.div`
  width: 100%;
  max-width: 570px;
  height: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0px 50px;
  }
`;
export const ContentRight = styled.div`
  width: 100%;
  max-width: 470px;
  height: 100%;
  @media (max-width: 991px) {
    padding-top: 32px;
    max-width: 100%;
    margin-bottom: 48px;
  }
`;
const headingStyles = `
  font-style: normal;
  font-weight: bold;
  font-size: 37.32px;
  line-height: 48px;
  margin-bottom: 24px;
  @media (max-width: 499px) {
    font-size: 32.32px;
    line-height: 1.15;
  }
`;
export const Heading = styled.div`
  ${headingStyles}
  ${props => textThemes?.heading[props?.theme]}
h1, h2, h3, h4, h5, h6, p, strong, b {
    ${headingStyles}
    ${props => textThemes?.heading[props?.theme]}
  }
`;
export const Subhead = styled.div`
  ${props => textThemes?.subhead[props?.theme]}
  p {
    font-style: normal;
    font-size: 21.6px;
    line-height: 32px;
    ${props => textThemes?.subhead[props?.theme]}
    margin-bottom: 24px;
  }
  strong {
    font-weight: bold;
  }
  blockquote {
    border-left: 2px solid white;
    padding-left: 16px;
    p {
      margin-bottom: 0px;
    }
    em {
      font-style: italic;
      font-weight: normal;
      font-size: 14px;
      line-height: 12px;
      color: #fafafa;
    }
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: #fafafa;
    }
    strong {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #fafafa;
    }
  }
`;
export const PrimaryButton = `
  position: relative;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #007bff;
  &:hover {
    color: #007bff;
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
    border-top: 2px solid #007bff;
    border-right: 2px solid #007bff;
    transition: all 0.3s ease;
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
    border-bottom: 2px solid #007bff;
  }
`;
