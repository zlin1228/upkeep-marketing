import styled from 'styled-components';

const textMappings = {
  light: 'color: #060606;',
  dark: 'color: #fafafa;',
  neutral: 'color: #060606;',
};

const shadowMappings = {
  light: `
  border: 1px solid #e0e6ed;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(10, 16, 34, 0.1);
  `,
  dark: 'box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);',
  neutral: `
  border: 1px solid #e0e6ed;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(10, 16, 34, 0.1);
  `,
};

export default styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  width: 100%;
  height: 100%;
  min-height: 204px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
  ${props => shadowMappings[props.theme]}
  &:hover {
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
    .card_cta {
      &:after {
        right: -24px;
      }
      &:before {
        animation-name: grow-right;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
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

  .clickable {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 100;
  }
  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 25.92px;
    line-height: 32px;
    ${props => textMappings[props.theme]}
    margin-bottom: 16px;
  }
  div,
  p {
    font-size: 18px;
    line-height: 26px;
    ${props => textMappings[props.theme]}
    margin-bottom: 16px;
  }
  .card_cta {
    position: relative;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #007bff;
    &:hover {
      color: #3395ff;
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
      border-top: 2px solid #3395ff;
      border-right: 2px solid #3395ff;
      transition: all 0.3s ease;
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
  }
`;
