import React from 'react';

/**
 * Generates alternate locale links using React's JSX syntax.
 *
 * @param {string} url - The base URL, potentially containing a locale code.
 * @param {Array} locales - An array of locale objects, each containing a 'language' property.
 * @returns {Object} - An object with locale codes as keys and corresponding <link> elements as values.
 * The 'x-default' link points to the base URL. English ('en') uses the base URL without a prefix.
 */

const formatLocaleUrls = (url, locales) => {
  // Base url without locale
  const baseUrl = url.replace(/\/[a-z]{2}\//, '/');

  // Locale links
  const localeLinks = {};

  locales.forEach(localeObj => {
    const locale = localeObj.language;

    // Create locale URL by inserting locale just after the domain name
    const urlParts = baseUrl.split('/');
    urlParts.splice(3, 0, locale);
    const localeUrl = locale === 'en' ? baseUrl : urlParts.join('/');

    localeLinks[locale] = (
      <link rel="alternate" hrefLang={locale} href={localeUrl} />
    );
  });

  // Default link
  localeLinks.xDefault = (
    <link rel="alternate" hrefLang="x-default" href={baseUrl} />
  );

  return localeLinks;
};

export default formatLocaleUrls;
