import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Image = ({ src, alt, classes, ...props }) => {
  if (!src) return null;

  if (typeof src === 'object') {
    return (
      <GatsbyImage
        className={`gatsby-image ${classes || 'UpKeep'}`}
        image={src}
        alt={alt || ''}
        width={props?.width}
        height={props?.height}
        loading={props?.loading || 'lazy'}
        imgStyle={props?.imgStyles}
        objectFit={props?.objectFit}
        objectPosition={props?.objectPosition}
      />
    );
  }

  return (
    <img
      className={`${classes || 'UpKeep'}`}
      src={src}
      alt={alt || ''}
      style={props?.imgStyles}
      width={props?.width}
      height={props?.height}
      loading={props?.loading || 'lazy'}
    />
  );
};

export default Image;
