import React from 'react';

import { Button } from '../styles/MobileToggle.styled';

const MobileToggle = ({ mobileNavActive, setMobileNavActive, theme }) => (
  <Button
    type="button"
    aria-label="Open Mobile Navigation"
    className={mobileNavActive ? 'active' : ''}
    onClick={() => setMobileNavActive(!mobileNavActive)}
    theme={theme}
  >
    <svg
      width="21"
      height="14"
      viewBox="0 0 21 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="top"
        d="M1.65625 1L19.6562 1"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="middle"
        d="M1.65625 7L19.6562 7"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="bottom"
        d="M1.65625 13L19.6562 13"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </Button>
);

export default MobileToggle;
