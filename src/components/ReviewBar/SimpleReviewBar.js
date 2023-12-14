import React from 'react';
import Icon from '../../molecules/Icon';
import defaultReviews from './data/defaultReviews';
import { color } from '../../atoms/colors';
import {
  ReviewBar,
  Wrapper,
  ReviewDetails,
  Review,
  ReviewLogo,
  ReviewStars,
} from './styles/SimpleReviewBar';

const SimpleReviewBar = () => (
  <ReviewBar>
    <Wrapper>
      {defaultReviews.map(review => (
        <Review key={review.alt}>
          <ReviewLogo src={review.logo} alt={review.alt} />
          <ReviewDetails>
            <ReviewStars>
              {review.stars.map(index => (
                <Icon
                  key={index}
                  icon="fa-solid fa-star"
                  fillColor={color.yellow[600]}
                  width="18px"
                  height="18px"
                />
              ))}
            </ReviewStars>
            <p>{review.details}</p>
          </ReviewDetails>
        </Review>
      ))}
    </Wrapper>
  </ReviewBar>
);

export default SimpleReviewBar;
