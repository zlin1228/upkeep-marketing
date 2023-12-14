import React from 'react';

import Icon from '../../../../molecules/Icon';

import { FormControl, Select } from '../styles/ChecklistForm.styled';
import { color } from '../../../../atoms/colors';

const SelectInput = ({ name, label, value, options, onChange, error }) => (
  <>
    <FormControl>
      <label htmlFor={name}>
        <span>*</span>
        {label}
      </label>
      <Select
        id={name}
        className={name}
        name={name}
        value={value}
        onChange={e => onChange(e)}
      >
        {options.map(option => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
      <Icon id="fa-solid fa-chevron-down" fillColor={color.darkBlue[600]} />
    </FormControl>
    {error && <p className="error-msg">{error}</p>}
  </>
);

export default SelectInput;
