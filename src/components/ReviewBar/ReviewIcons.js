import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import Icon from '../../molecules/Icon';
import { color } from '../../atoms/colors';
import { ReviewIcons } from './styles/ReviewIcons';

const numOfStars = [1, 2, 3, 4, 5];

export default ({ icons }) => (
  <ReviewIcons>
    <div className="social_rating">
      <div className="social_stars">
        {numOfStars.map(star => (
          <Icon
            key={star}
            icon="fa-solid fa-star"
            fillColor={color.yellow[600]}
            width="18px"
            height="18px"
          />
        ))}
      </div>
      Based on 200+ reviews on
    </div>
    <div className="social_logos">
      {icons.map(({ id, image }) => (
        <GatsbyImage key={id} src={image?.gatsbyImageData} alt={image?.alt} />
      ))}
    </div>
  </ReviewIcons>
);
