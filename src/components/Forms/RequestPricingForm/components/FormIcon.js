import React from 'react';
import Icon from '../../../../molecules/Icon';
import { color } from '../../../../atoms/colors';

const FormIcon = ({ status }) => {
  if (status === 'valid') {
    return (
      <Icon
        id="fa-solid fa-check"
        fillColor={color.darkBlue[400]}
        width="16px"
        height="16px"
        classes="valid-icon"
      />
    );
  }
  if (status === 'invalid') {
    return (
      <Icon
        id="fa-regular fa-circle-exclamation"
        fillColor="rgb(153,32,25)"
        width="16px"
        height="16px"
        classes="invalid-icon"
      />
    );
  }
  return null;
};

export default FormIcon;
