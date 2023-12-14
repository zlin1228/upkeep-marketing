import React from 'react';
import Newsletter from '../components/Forms/Newsletter';
import DownloadForm from '../components/Forms/DownloadForm';

const downloads = {
  ebookA:
    'https://www.datocms-assets.com/38028/1617378397-upkeep2020maintenancesurveyfinal-1.pdf',
  ebookB:
    'https://www.datocms-assets.com/38028/1617378363-cmmscompetitiveanalysis.pdf',
  ebookC:
    'https://www.datocms-assets.com/38028/1617378374-stanfordfacilitymaintenance-1.pdf',
};

const pardotForms = {
  newsletterForm: '[pardot-form id="6038" title="Sign up For Newsletter"]',
  ebookFormA: '[pardot-form id="6112" title="Download 2020 CMMS Insights"]',
  ebookFormB: '[pardot-form id="6036" title="Competitor Guide"]',
  ebookFormC: '[pardot-form id="6034" title="Stanford Facilities Program"]',
};

export const getPardotInRichText = string => {
  if (string === undefined) return;
  let newString;
  if (string.includes(pardotForms.newsletterForm)) {
    newString = string.replace(pardotForms.newsletterForm, '');
    return [newString, <Newsletter />];
  }
  if (string.includes(pardotForms.ebookFormA)) {
    newString = string.replace(pardotForms.ebookFormA, '');
    return [newString, <DownloadForm download={downloads.ebookA} />];
  }
  if (string.includes(pardotForms.ebookFormB)) {
    newString = string.replace(pardotForms.ebookFormB, '');
    return [newString, <DownloadForm download={downloads.ebookB} />];
  }
  if (string.includes(pardotForms.ebookFormC)) {
    newString = string.replace(pardotForms.ebookFormC, '');
    return [newString, <DownloadForm download={downloads.ebookC} />];
  }
  return [string];
};
