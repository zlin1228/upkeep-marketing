import React from 'react';

import Icon from '../../Icon';

import { color } from '../../../atoms/colors';
import { chevronIconTheme } from '../styles/theme';

export const ChevronIcon = ({ theme = 'dark' }) => (
  <Icon
    id="chevron-right"
    width="16px"
    height="16px"
    fillColor={chevronIconTheme[theme].color || color.grey[300]}
    strokeColor={chevronIconTheme[theme].color || color.grey[300]}
  />
);

export const HomeIcon = () => <Icon id="home" width="18px" height="18px" />;
