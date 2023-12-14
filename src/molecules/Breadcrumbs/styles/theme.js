import { color } from '../../../atoms/colors';
import { shadow } from '../../../atoms/shadows';

export const homeIconTheme = {
  resting: {
    light: {
      color: color.common.white,
    },
    dark: {
      color: color.darkBlue[600],
    },
  },
  hover: {
    light: {
      color: color.common.white,
    },
    dark: {
      color: color.grey[900],
    },
  },
  focus: {
    light: {
      color: color.common.white,
      borderRadius: '6px',
      background: color.darkBlue[600],
    },
    dark: {
      color: color.grey[700],
      borderRadius: '6px',
      background: color.steel[50],
    },
  },
  disabled: {
    light: {
      color: color.grey[400],
    },
    dark: {
      color: color.grey[400],
    },
  },
};

export const chevronIconTheme = {
  light: {
    color: color.common.white,
  },
  dark: {
    color: color.grey[700],
  },
};

export const breadcrumbTheme = {
  resting: {
    light: {
      color: color.common.white,
    },
    dark: {
      color: color.darkBlue[600],
    },
  },
  hover: {
    light: {
      color: color.common.white,
    },
    dark: {
      color: color.grey[800],
    },
  },
  focus: {
    light: {
      color: color.common.white,
      borderRadius: '6px',
      background: color.darkBlue[600],
    },
    dark: {
      color: color.grey[700],
      borderRadius: '6px',
      background: color.steel[50],
    },
  },
  disabled: {
    light: {
      color: color.grey[400],
    },
    dark: {
      color: color.grey[400],
    },
  },
};

export const ellipsisTheme = {
  light: {
    color: color.common.white,
  },
  dark: {
    color: color.grey[600],
  },
};

export const dropdownTheme = {
  light: {
    background: color.common.black,
    borderRadius: '4px',
    border: `1px solid ${color.darkBlue[600]}`,
    boxShadow: shadow('lg', 'dark'),
  },
  dark: {
    background: color.common.white,
    borderRadius: '4px',
    border: '1px solid #E3F4FF',
    boxShadow: shadow('lg', 'dark'),
  },
};

export const dropdownItemTheme = {
  resting: {
    light: {
      color: color.common.white,
      background: color.common.black,
      border: `1px solid ${color.common.transparent}`,
      borderBottom: `1px solid ${color.darkBlue[600]}`,
    },
    dark: {
      color: color.darkGrey[700],
      background: color.common.white,
      border: `1px solid ${color.common.transparent}`,
      borderBottom: `1px solid ${color.darkGrey[100]}`,
    },
  },
  hover: {
    light: {
      color: color.common.white,
      background: color.darkBlue[600],
      border: `1px solid ${color.darkBlue[600]}`,
    },
    dark: {
      color: color.darkBlue[1000],
      background: color.steel[50],
      border: `1px solid ${color.midnight[200]}`,
    },
  },
  focus: {
    light: {
      color: color.common.white,
      background: color.common.black,
      border: `1px solid ${color.common.black}`,
      outline: `4px solid #B1E0EB`,
      outlineOffset: '-4px',
    },
    dark: {
      color: color.darkGrey[700],
      background: color.common.white,
      border: `1px solid ${color.common.white}`,
      outline: `4px solid #B1E0EB`,
      outlineOffset: '-4px',
    },
  },
};
