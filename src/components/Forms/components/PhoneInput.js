import React, { useRef, useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { validatePhone } from '../Utilities/phoneValidator';
import getCountryCode from '../../../utils/getCountryCode';

const PhoneInputComponent = ({ data, setData }) => {
  const inputRef = useRef();
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    const input = inputRef.current.numberInputRef;
    const inputDisplay = window.getComputedStyle(input).display;
    const inputLabel = inputRef.current.numberInputRef.parentElement;
    if (inputDisplay === 'none') inputLabel.style.display = 'none';
    if (inputDisplay === 'block') inputLabel.style.display = 'block';
  });
  return (
    <PhoneInput
      ref={inputRef}
      specialLabel="Phone Number (required)"
      inputProps={{ name: 'phone' }}
      country={countryCode || null}
      value={data.phone}
      showDropdown={false}
      disableDropdown
      placeholder="Enter your mobile number"
      onChange={phoneNumber => {
        setData({
          ...data,
          phone: validatePhone(phoneNumber),
        });
      }}
      onClick={() => getCountryCode(setCountryCode)}
    />
  );
};

export default PhoneInputComponent;
