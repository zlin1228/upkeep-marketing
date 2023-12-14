import React from 'react';
import { scrollToTop } from '../../Forms/Utilities/scrollUtilities';
import {
  Wrapper,
  ScrollLink,
  ConversionLink,
} from '../../../styles/Components/ConversionPanel/ConversionCta';

export default ({ label, url, theme, align }) => (
  <Wrapper>
    {url?.includes('scrollTop') ? (
      <ScrollLink
        align={align}
        type="button"
        background={theme}
        className="btn px-4"
        onClick={() => scrollToTop(10)}
      >
        {label}
      </ScrollLink>
    ) : (
      <ConversionLink
        align={align}
        background={theme}
        to={(url || '')?.replace('https://www.onupkeep.com', '')}
        className="btn px-4"
      >
        {label}
      </ConversionLink>
    )}
  </Wrapper>
);
