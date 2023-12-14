import React from 'react';

import { FormControl, Input } from '../styles/ChecklistForm.styled';

const TextInput = ({ name, label, placeholder, value, onChange, error }) => (
  <>
    <FormControl>
      <label htmlFor={name}>
        <span>*</span>
        {label}
      </label>
      <Input
        id={name}
        className={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e)}
      />
    </FormControl>
    {error && <p className="error-msg">{error}</p>}
  </>
);

export default TextInput;
