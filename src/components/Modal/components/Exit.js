import React from 'react';
import CloseIcon from '../VideoModal/components/CloseIcon';
import { Button } from '../styles/Exit.styled';

const Exit = ({ showModal, setShowModal }) => (
  <Button
    aria-label="Close Modal"
    type="button"
    onClick={() => setShowModal(!showModal)}
  >
    <CloseIcon />
  </Button>
);

export default Exit;
