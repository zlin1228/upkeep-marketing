import React from 'react';
import { Button } from '../styles/index.styled';

const PageControl = ({ theme, classes, clickHandler, children }) => (
  <Button
    type="button"
    className={classes}
    onClick={clickHandler}
    theme={theme}
  >
    {children}
  </Button>
);

export default PageControl;
