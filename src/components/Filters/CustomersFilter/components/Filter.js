import React from 'react';

import SliderIcon from '../../../../assets/slider-icon.svg';

import { Wrapper, Select } from '../styles/Filter.styled.';

const Filter = ({ options, setActiveOption }) => (
  <Wrapper>
    <Select onChange={e => setActiveOption(e.target.value)}>
      {options.map(
        option =>
          option && (
            <option key={option} value={option}>
              {option}
            </option>
          )
      )}
    </Select>
    <img className="slider-icon" src={SliderIcon} alt="Slider Icon" />
  </Wrapper>
);

export default Filter;
