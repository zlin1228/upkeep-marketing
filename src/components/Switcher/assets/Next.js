import React from 'react';
import { Button } from '../styles/SwitchbackSwitcherControls.styled';

const Next = ({ imgSliderRef, detailsSliderRef }) => (
  <Button
    className="next"
    type="button"
    aria-label="Next"
    onClick={() => {
      imgSliderRef.current?.slickNext();
      detailsSliderRef.current?.slickNext();
    }}
  >
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5657 17.2122C22.8781 16.8998 22.8781 16.3932 22.5657 16.0808L17.4745 10.9896C17.1621 10.6772 16.6556 10.6772 16.3431 10.9896C16.0307 11.3021 16.0307 11.8086 16.3431 12.121L20.8686 16.6465L16.3431 21.172C16.0307 21.4844 16.0307 21.9909 16.3431 22.3033C16.6556 22.6158 17.1621 22.6158 17.4745 22.3033L22.5657 17.2122ZM10 17.4465L22 17.4465L22 15.8465L10 15.8465L10 17.4465Z"
        fill="#8C98A9"
      />
      <rect
        x="0.5"
        y="1.14648"
        width="31"
        height="31"
        rx="15.5"
        stroke="#8C98A9"
      />
    </svg>
  </Button>
);

export default Next;
