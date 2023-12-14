import React from 'react';
import { ToggleSwitchContainer } from '../styles/Toggle.styled';

const Toggle = ({ categories, handleToggle, selectedCategory }) => (
  <ToggleSwitchContainer>
    <input type="checkbox" onChange={() => handleToggle()} />
    <label>
      <div className="toggle-titles">
        {categories.map((category, index) => (
          <div
            className="toggle-title-container"
            key={`toggle-title-container-${index}`}
          >
            <p className={`toggle-title ${index === selectedCategory ? 'selected' : ''}`}>
              {category?.categoryTitle}
            </p>
          </div>
        ))}
      </div>
      <div className="toggle-toggle" />
    </label>
  </ToggleSwitchContainer>
);

export default Toggle;
