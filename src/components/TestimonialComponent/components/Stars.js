import React from 'react';
import shortid from 'shortid';

const Stars = ({ rating }) => {
  const numOfStars = Array.from(Array(rating).keys());
  return (
    <div className="stars">
      {numOfStars.map(() => (
        <svg
          key={shortid.generate()}
          className="star"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.55837 11.5128L3.11567 13.8845L3.96415 8.86107L0.369933 5.30342L5.33702 4.57051L7.55837 0L9.77972 4.57051L14.7468 5.30342L11.1526 8.86107L12.0011 13.8845L7.55837 11.5128Z"
            fill="#EFC75E"
          />
        </svg>
      ))}
    </div>
  );
};

export default Stars;
