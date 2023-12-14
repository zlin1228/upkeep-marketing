export const setSubheadTheme = theme => {
  const textColorMappings = {
    Blue: 'Light',
    Dark: 'Light',
    Gray: 'Dark',
  };
  return textColorMappings[theme] || 'Gray';
};

export const setHeadingTheme = theme => {
  const textColorMappings = {
    Blue: 'Light',
    Dark: 'Light',
    Gray: 'Dark',
  };
  return textColorMappings[theme] || 'Dark';
};

export const setCtaTheme = theme => {
  const textColorMappings = {
    Blue: 'Light',
    Dark: 'Light',
  };
  return textColorMappings[theme] || 'Blue';
};
