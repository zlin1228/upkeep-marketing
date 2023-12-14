import React from 'react';

import formatLocaleUrls from './utils/formatLocaleUrls';

const Locales = ({ url, locales }) => {
  const { en, es, xDefault } = formatLocaleUrls(url, locales);

  return (
    <>
      {en}
      {es}
      {xDefault}
    </>
  );
};

export default Locales;
