import { color } from '../../../atoms/colors';

const THEME_TRANSPARENT_LIGHT = 'Transparent - Light';
const THEME_TRANSPARENT_DARK = 'Transparent - Dark';
const THEME_FILL_LIGHT = 'Fill - Light';

const headerTheme = {
  [THEME_TRANSPARENT_LIGHT]: {
    background: color.common.transparent,
    gradient: color.common.transparent,
    border: 'none',
    logo: color.common.white,
    text: color.common.white,
    icon: color.common.white,
    link: 'Link - White',
  },
  [THEME_TRANSPARENT_DARK]: {
    background: color.common.transparent,
    gradient: color.common.transparent,
    border: 'none',
    logo: color.darkBlue[900],
    text: color.darkBlue[1000],
    icon: color.darkBlue[1000],
    link: 'Link - Dark',
  },
  [THEME_FILL_LIGHT]: {
    background: color.common.white,
    gradient: color.common.white,
    border: `1px solid ${color.darkBlue[50]}`,
    logo: color.darkBlue[900],
    text: color.darkBlue[1000],
    icon: color.darkBlue[900],
    link: 'Link - Dark',
  },
};

export default headerTheme;
