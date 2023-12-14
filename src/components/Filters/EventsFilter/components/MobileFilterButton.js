import React from 'react';
import Icon from '../../../../molecules/Icon';
import handleFilters from '../utils/handleFilters';
import { Button } from '../styles/MobileFilterButton.styled';

const MobileFilterButton = ({
  text,
  option,
  activeFilter,
  setActiveFilter,
}) => (
  <Button
    type="button"
    onClick={() => handleFilters(text, option, activeFilter, setActiveFilter)}
  >
    <div className="checked">
      {activeFilter === option ? (
        <Icon id="fa-solid fa-square-check" width="15px" height="15px" />
      ) : (
        <Icon id="fa-regular fa-square" width="15px" height="15px" />
      )}
    </div>
    <span className="text">{option}</span>
  </Button>
);

export default MobileFilterButton;
