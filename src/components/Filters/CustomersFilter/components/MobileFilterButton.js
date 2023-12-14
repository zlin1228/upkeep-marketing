import React from 'react';
import styled from 'styled-components';
import handleFilters from '../utils/handleFilters';
import Icon from '../../../../molecules/Icon';

const MobileFilterButton = ({ type, option, filters, setFilters }) => (
  <Button
    type="button"
    onClick={() => handleFilters(type, filters, setFilters, option)}
  >
    <Check className="checked">
      {filters === option ? (
        <Icon id="fa-solid fa-square-check" width="18px" height="18px" />
      ) : (
        <Icon id="fa-regular fa-square" width="18px" height="18px" />
      )}
    </Check>
    <span className="text">{option}</span>
  </Button>
);

export default MobileFilterButton;

const Button = styled.button`
  width: 100%;
  height: auto;
  padding: 12.5px 24px;
  background: none;
  outline: none;
  border: none;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #515667;
  &:focus,
  &:hover {
    outline: none;
    background: none;
    color: #515667;
  }
  svg {
    margin-right: 12px;
    fill: #007bff;
    path {
      fill: #007bff;
    }
  }
`;
const Check = styled.div``;
