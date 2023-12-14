import { color } from './colors';

/*
 * usage: ${gradient.primary['100/50']}
 */
export const gradients = {
  primary: {
    '100/50': `linear-gradient(102.89deg, ${color.primary[100]} 13.72%, ${color.primary[50]} 86%)`,
    '200/100': `linear-gradient(105.42deg, ${color.primary[200]} 16.96%, ${color.primary[100]} 81.44%)`,
    '300/200': `linear-gradient(105.15deg, ${color.primary[300]} 15.95%, ${color.primary[200]} 81.1%)`,
    '700/400': `linear-gradient(104.64deg, ${color.primary[700]} 18.1%, ${color.primary[400]} 84.6%)`,
    '900/500': `linear-gradient(90deg, ${color.primary[900]} -4.68%, ${color.primary[500]} 99.83%)`,
    '900/25': `linear-gradient(78.68deg, ${color.primary[900]} -1.9%, ${color.primary[25]} 103.73%)`,
  },
  darkBlue: {
    '100/25': `linear-gradient(102.89deg, ${color.darkBlue[100]} 13.72%,  ${color.darkBlue[25]} 86%)`,
    '200/100': `linear-gradient(283.39deg, ${color.darkBlue[200]} 15%, ${color.darkBlue[100]} 85.41%)`,
    '300/100': `linear-gradient(105.15deg, ${color.darkBlue[300]} 15.95%, ${color.darkBlue[100]} 81.1%)`,
    '600/300': `linear-gradient(104.64deg, ${color.darkBlue[600]} 18.1%, ${color.darkBlue[300]} 84.6%)`,
    '700/400': `linear-gradient(102.79deg, ${color.darkBlue[700]} 11.38%, ${color.darkBlue[400]} 84.03%)`,
    '900/500': `linear-gradient(101.74deg, ${color.darkBlue[900]} 9.73%, ${color.darkBlue[500]} 87.02%)`,
  },
  mixed: {
    'red/yellow': `linear-gradient(90deg, ${color.primary[500]} 0%, ${color.yellow[400]} 100.17%)`,
    'red/blue': `linear-gradient(81.39deg, ${color.primary[500]} 0.15%, ${color.blue[900]} 99.85%)`,
  },
};
