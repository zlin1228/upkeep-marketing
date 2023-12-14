import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import {
  Images,
  ImageHolder,
  ClickableImageHolder,
} from './styles/SocialProofImages';

export default ({ data, clickable }) => (
  <Images className="social-proof-images" clickable={clickable}>
    {data.map(item => {
      return clickable ? (
        <ClickableImageHolder to={item?.image?.link} key={item?.image?.url}>
          <GatsbyImage
            src={item?.image?.gatsbyImageData || item?.image?.url}
            alt="upkeep social proof"
            classes="social-proof-image"
          />
        </ClickableImageHolder>
      ) : (
        <ImageHolder key={item?.image?.url}>
          <GatsbyImage
            src={item?.image?.gatsbyImageData || item?.image?.url}
            alt="upkeep social proof"
            classes="social-proof-image"
          />
        </ImageHolder>
      );
    })}
  </Images>
);
