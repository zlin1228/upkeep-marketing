import React from 'react';
import SliderIcon from '../../../../assets/slider-icon.svg';
import { Header, Close } from '../styles/MobileFilterHeader.styled';

const MobileFilterHeader = ({ setMobileFilter }) => (
  <Header>
    <h5>
      Filter
      <img src={SliderIcon} alt="Slider Icon" />
    </h5>
    <Close onClick={() => setMobileFilter(false)}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 1L1 13M1 1L13 13"
          stroke="#0D141A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Close>
  </Header>
);

export default MobileFilterHeader;
