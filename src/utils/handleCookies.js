import Cookies from 'js-cookie';

const domain =
  'https://www.upkeep.com' || 'https://stagingmarketingsiteupkeep.gatsbyjs.io';

const utmExpiry = 30;

const UTMs = {
  utm_source: null,
  utm_medium: null,
  utm_campaign: null,
  utm_term: null,
  utm_content: null,
};

const utmKeys = Object.keys(UTMs);

export const getUTMs = () => {
  const utmValues = utmKeys.map(key => Cookies.get(key));
  return Object.fromEntries(utmKeys.map((_, i) => [utmKeys[i], utmValues[i]]));
};

const getUrlParam = (nameParam, urlParam = window.location.href) => {
  const name = nameParam.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(urlParam);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

const checkSearch = url => {
  const searchEngines = ['google', 'bing', 'yahoo'];
  const referrer = searchEngines.find(engine => url.includes(engine));

  if (referrer && !/(&|\?)paramX/.test(url)) {
    // Organic Search
    UTMs.utm_medium = UTMs.utm_medium || 'organic search';
    UTMs.utm_source = UTMs.utm_source || referrer;
  } else if (url?.includes(domain)) {
    // Direct Search
    UTMs.utm_medium = UTMs.utm_medium || 'direct';
    UTMs.utm_source = UTMs.utm_source || 'direct';
  } else {
    // Referred Search
    UTMs.utm_medium = UTMs.utm_medium || 'referral';
    UTMs.utm_source = UTMs.utm_source || 'referral';
  }
};

const setCookies = () => {
  utmKeys.forEach(key => {
    Cookies.set(key, UTMs[key], {
      expires: utmExpiry,
      path: '/',
    });
  });
};

const handleCookies = url => {
  // Prepare a map of utm values
  const utmValues = utmKeys.reduce((acc, key) => {
    acc[key] = getUrlParam(key, window.location.href);
    return acc;
  }, {});

  const hasUtmParams = Object.values(utmValues).some(value => value !== null);

  // Check if there's any UTM params in the URL
  if (hasUtmParams) {
    // Assign the UTM params to the UTMs object
    utmKeys.forEach(key => {
      UTMs[key] = utmValues[key];
    });
  } else {
    // If no utm params, check search type based on referrer (organic, direct, or referred)
    checkSearch(url);
  }

  setCookies();
};

export default handleCookies;
