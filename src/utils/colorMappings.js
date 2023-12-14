import backgroundLight from '../assets/background/hero-bg-light.svg';
import BlueLinearBG from '../assets/background/blue-linear-bg.png';
import { color } from '../atoms/colors';

export const iconColors = {
  Purple: `
  .fa-primary, .fa-secondary {
    fill: #4945FB;
  }
  background: rgba(73, 69, 251, 0.25);
  `,
  'Dark Purple': `
    .fa-primary, .fa-secondary {
      fill: #ffffff;
    }
    .svg-inline--fa .fa-secondary {
      opacity: .5;
    }
    background: #4945FB;
  `,
  Blue: `
  .fa-primary, .fa-secondary {
    fill: #007BFF;
  }
  background: rgba(0, 123, 255, 0.25);
  `,
  'Dark Blue': `
    .fa-primary, .fa-secondary {
      fill: #ffffff;
    }
    .svg-inline--fa .fa-secondary {
      opacity: .5;
    }
    background: #006DE6;
  `,
  Yellow: `
  .fa-primary, .fa-secondary {
    fill: #F5C953;
  }
  background: rgba(245, 201, 83, 0.25);
  `,
  Green: `
  .fa-primary, .fa-secondary {
    fill: #37C06B;
  }
  background: rgba(108, 199, 142, 0.25);
  `,
  'Dark Green': `
    .fa-primary, .fa-secondary {
      fill: #ffffff;
    }
    .svg-inline--fa .fa-secondary {
      opacity: .5;
    }
    background: #2C9A56;
  `,
  Pink: `
  .fa-primary, .fa-secondary {
    fill: #F695CE;
  }
  background: rgba(246, 149, 206, 0.25);
  `,
  Teal: `
  .fa-primary, .fa-secondary {
    fill: #72CAD8;
  }
  background: rgba(114, 202, 216, 0.25);
  `,
};

export const headingKickerColors = {
  Light: `color: ${color.common.white};`,
  Dark: `color: #33394B;`,
  Green: `color: #47B972;`,
  Blue: `color: ${color.blue[700]};`,
  Yellow: `color: #EFC75E;`,
  Red: `color: ${color.primary[700]};`,
  Purple: `color: #4945FB;`,
  Pink: `color: #F695CE;`,
  Teal: `color: #72CAD8;`,
  'Light Blue': `color: #CCE5FF;`,
};

export const backgroundColors = {
  'Light Blue': 'background: #FAFCFF;',
  White: 'background:#FFFFFF;',
  Dark: 'background: #0B1A2B;',
  Neutral: 'background: #F6F9FA;',
  'White Blue Gradient': `
    background-image: url(${backgroundLight});
    background-color: #FFFFFF;
    background-repeat: no-repeat;
    background-position: 0 0, 100% 100%;
    background-size: cover;
    `,
  'Blue Linear': `
    background-image: url(${BlueLinearBG});
    background-color: #FFFFFF;
    background-repeat: no-repeat;
    background-position: 0 0, 100% 100%;
    background-size: cover;
    @media (max-width: 768px) {
      background-position: bottom;
      background-size: 768px 750px;
    }
    @media (max-width: 576px) {
      background-position: bottom;
      background-size: 768px 650px;
    }
    `,
};

export const backgroundThemes = {
  Dark: 'background-color: rgb(12, 27, 43);',
  Light: 'background-color: rgb(250, 251, 252);',
  Blue: 'background-color: rgb(0, 123, 255);',
  Red: 'background-color: #DE1824',
};

export const textColor = {
  Light: 'color: #FFFFFF;',
  Dark: 'color: #33394B;',
  Blue: 'color: #007BFF;',
  Green: 'color: #47B972',
  Gray: 'color: #707481;',
  Red: 'color: #DE1824',
};

export const textHoverColor = {
  Light: 'color: #3395ff;',
  Dark: 'color:#ededed;',
  Red: 'color: #fa4947;',
};

export const arrowBorderTop = {
  Light: `border-top: 2px solid #3395ff;
    border-right: 2px solid #3395ff;`,
  Dark: `border-top: 2px solid #FFFFFF;
    border-right: 2px solid #FFFFFF;`,
  Red: `border-top: 2px solid #fa4947;
    border-right: 2px solid #fa4947;`,
};

export const arrowBorderBottom = {
  Light: `border-bottom: 2px solid #3395ff;`,
  Dark: `border-bottom: 2px solid #FFFFFF;`,
  Red: `border-bottom: 2px solid #fa4947;`,
};
