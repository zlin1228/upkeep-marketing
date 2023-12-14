import React from 'react';
import { color } from '../../atoms/colors';
import { Button } from './styles/PaginateButton.styled';

const PaginateButton = ({ array, text, sliceIndex, setSliceIndex, count }) => {
  if (array?.length <= sliceIndex) return null;
  return (
    <Button onClick={() => setSliceIndex(sliceIndex + count)}>
      <span>{text}</span>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L7 7L13 1"
          stroke={color.primary[700]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

export default PaginateButton;
