import React from 'react';
import styled from 'styled-components';
import Icon from '../../molecules/Icon';
import { color } from '../../atoms/colors';

const SocialStars = ({ theme }) => {
  const themeClass =
    theme === 'Dark' || theme === 'Blue' ? 'text-light' : 'text-dark';
  return (
    <SocialStarReviews className={`social-stars ${themeClass}`}>
      {Array(5)
        .fill()
        .map((_, index) => (
          <span className="social-star-icon" key={index}>
            <Icon
              id="fa-solid fa-star"
              width="18px"
              height="18px"
              fillColor={color.yellow[400]}
            />
          </span>
        ))}
      <span className="social-reviews">Based on 1,500+ reviews on</span>
    </SocialStarReviews>
  );
};

export default SocialStars;

const SocialStarReviews = styled.p`
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  white-space: nowrap;
  margin-bottom: 22px;
  margin-top: 24px;
  &.text-light {
    color: #33394b;
  }
  &.text-dark {
    color: #f9f9f9;
  }
  .social-star-icon {
    color: #efc75e;
    margin-right: 7px;
    font-size: 19px;
  }
`;
