import Cookies from 'js-cookie';

export const getUrlVars = () => {
  let vars = {};
  let parts = window?.location?.href?.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    (m, key, value) => {
      vars[key] = value;
    }
  );
  return vars;
};

export const getAndSetUTMs = () => {
  const urlParams = new URLSearchParams(window.location.search);

  Cookies.set('upkeep_utm_source', urlParams.get('utm_source'));
  Cookies.set('upkeep_utm_medium', urlParams.get('utm_medium'));
  Cookies.set('upkeep_utm_campaign', urlParams.get('utm_campaign'));
  Cookies.set('upkeep_utm_term', urlParams.get('utm_term'));
  Cookies.set('upkeep_utm_content', urlParams.get('utm_content'));
  localStorage.setItem('upkeep_utm_source', urlParams.get('utm_source'));
  localStorage.setItem('upkeep_utm_medium', urlParams.get('utm_medium'));
  localStorage.setItem('upkeep_utm_campaign', urlParams.get('utm_campaign'));
  localStorage.setItem('upkeep_utm_term', urlParams.get('utm_term'));
  localStorage.setItem('upkeep_utm_content', urlParams.get('utm_content'));
};

export const getPardotVisitorId = () => window?.pi?.tracker?.visitor_id;
