import React from 'react';
import { Image } from '../styles/TrustbarAddOn';

const AddOnLogos = ({ theme, logo }) => {
  switch (theme) {
    case 'Color':
      return (
        <Image src={logo?.logo?.image?.url} alt={logo?.logo?.image?.alt} />
      );

    case 'White':
      return (
        <Image
          src={logo?.lightLogo?.image?.url}
          alt={logo?.lightLogo?.image?.alt}
        />
      );
    case 'Grayscale':
      return (
        <Image
          src={logo?.grayLogo?.image?.url}
          alt={logo?.grayLogo?.image?.alt}
        />
      );
    default:
      return null;
  }
};

export default AddOnLogos;
