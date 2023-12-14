import React, { useEffect, useRef } from 'react';

const Input = ({
  data,
  handleChange,
  validation,
  type,
  name,
  label,
  placeholder,
}) => {
  const inputRef = useRef();
  useEffect(() => {
    const input = inputRef.current;
    const inputDisplay = window.getComputedStyle(input).display;
    const inputLabel = inputRef.current.parentElement;
    if (inputDisplay === 'none') inputLabel.style.display = 'none';
    if (inputDisplay === 'block') inputLabel.style.display = 'block';
  });
  return (
    <label htmlFor={name}>
      {label}
      <input
        ref={inputRef}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="form-control"
        value={data[name]}
        onChange={e => handleChange(e)}
      />
      <div
        className="invalid-feedback"
        dangerouslySetInnerHTML={{ __html: validation.feedback }}
      />
    </label>
  );
};

export default Input;
