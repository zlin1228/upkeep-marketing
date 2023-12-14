import React from 'react';
import { SuccessMessage } from '../styles/Success';

const Success = ({ type }) => {
  return (
    <SuccessMessage type={type}>
      <h2>🎉 Success!</h2>
      <p>Your submission has been received. Enjoy your toolkit.</p>
    </SuccessMessage>
  );
};

export default Success;
