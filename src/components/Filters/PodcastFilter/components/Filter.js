import React from 'react';
import { Wrapper, Select } from '../styles/Filter.styled.';
import Icon from '../../../../molecules/Icon';

const Filter = ({ options, setActiveOption }) => (
  <Wrapper>
    <Select onChange={e => setActiveOption(e.target.value)}>
      {options.map(
        option =>
          option && (
            <option key={option?.category} value={option?.category}>
              {`${option?.category}`}
              {option?.postCount && ` (${option?.postCount})`}
            </option>
          )
      )}
    </Select>
    <Icon id="fa-solid fa-chevron-down" width="16px" height="16px" />
  </Wrapper>
);

export default Filter;
