const DEMO_PARDOT_FORM_URL =
  'https://info.onupkeep.com/l/500441/2020-01-27/cbdxy?success_location=https://www.onupkeep.com/success&conversion_page=https://www.onupkeep.com/demo';
const DEMO_CHILIPIPER_PARDOT_FORM_URL =
  'https://info.upkeep.com/l/500441/2022-12-16/s1r34';
const EMAIL_PARDOT_FORM_URL =
  'https://info.onupkeep.com/l/500441/2020-01-09/c5fyt?success_location=https://www.onupkeep.com/demo';
const NEWSLETTER_PARDOT_FORM_URL =
  'https://info.onupkeep.com/l/500441/2018-02-06/28vqy';
const NEWSLETTER_SIGNUP_LIST_PARDOT_FORM_URL =
  'https://info.onupkeep.com/l/500441/2021-02-25/gypvm';
const FREE_TRIAL_PARDOT_FORM_URL =
  'https://info.onupkeep.com/l/500441/2021-06-08/hsj9j';
const FREE_TRIAL_SALES_PARDOT_FORM_URL =
  'https://info.onupkeep.com/l/500441/2021-03-10/h3r83';
const EDGE_CONTACT_FORM = 'https://info.onupkeep.com/l/500441/2021-05-20/hnz66';
const GATED_CONTENT_PARDOT_FORM_URL =
  'https://info.onupkeep.com/l/500441/2021-07-12/hzl29';
const TEST_FORM = 'https://info.onupkeep.com/l/500441/2021-07-01/hxnwc';
const EXIT_INTENT_FORM = 'https://info.onupkeep.com/l/500441/2021-08-11/j4x2y';
const STARTER_SUBSCRIPTION_FORM_URL =
  'https://info.onupkeep.com/l/500441/2021-11-17/kclkx';
const REQUEST_PRICING_FORM_URL =
  'https://info.onupkeep.com/l/500441/2021-12-22/mr73x';
const PARTNER_SIGNUP_FORM_URL =
  'https://info.onupkeep.com/l/500441/2022-02-09/n8hsp';
const BOOK_CONTEST_FORM_URL =
  'https://info.onupkeep.com/l/500441/2022-04-27/pddr6';
const TSHIRT_GIVEAWAY_FORM_URL =
  'https://info.onupkeep.com/l/500441/2022-09-28/r36g5';
const DEMO_CMMMS_RADIO_FORM_URL =
  'https://info.upkeep.com/l/500441/2023-11-14/wdgkx';

export const sendToDemoPardotInIframe = (demo, params, formHandler) =>
  sendToPardotInIframe(
    formHandler || DEMO_PARDOT_FORM_URL,
    demo,
    params,
    formHandler
  );
export const sendToEmailPardotInIframe = demo =>
  sendToPardotInIframe(EMAIL_PARDOT_FORM_URL, demo);
export const sendToBlogSubscriptionPardotInIframe = demo =>
  sendToPardotInIframe(EMAIL_PARDOT_FORM_URL, demo);
export const sendToNewsletterPardotInIframe = demo =>
  sendToPardotInIframe(NEWSLETTER_PARDOT_FORM_URL, demo);
export const sendToNewsletterSignupListPardotInIframe = demo =>
  sendToPardotInIframe(NEWSLETTER_SIGNUP_LIST_PARDOT_FORM_URL, demo);
export const sendToFreeTrialPardotInIframe = (demo, params) =>
  sendToPardotInIframe(FREE_TRIAL_PARDOT_FORM_URL, demo, params);
export const sendToFreeTrialSalesPardotInIframe = (demo, params) =>
  sendToPardotInIframe(FREE_TRIAL_SALES_PARDOT_FORM_URL, demo, params);
export const sendToGatedContentPardotInIframe = (demo, handler) =>
  sendToPardotInIframe(handler || GATED_CONTENT_PARDOT_FORM_URL, demo);
export const sendToEdgeContactPardotInIframe = (demo, params) =>
  sendToPardotInIframe(EDGE_CONTACT_FORM, demo, params);
export const sendToTestFormPardotInIframe = (demo, params) =>
  sendToPardotInIframe(TEST_FORM, demo, params);
export const sendToExitIntentFormPardotInIframe = (demo, params, formHandler) =>
  sendToPardotInIframe(formHandler || EXIT_INTENT_FORM, demo, params);
export const sendToStarterSubscriptionPardotInIframe = (demo, params) =>
  sendToPardotInIframe(STARTER_SUBSCRIPTION_FORM_URL, demo, params);
export const sendToRequestPricingPardotInIframe = (demo, params) =>
  sendToPardotInIframe(REQUEST_PRICING_FORM_URL, demo, params);
export const sendToPartnerSignupPardotInIframe = (demo, params) =>
  sendToPardotInIframe(PARTNER_SIGNUP_FORM_URL, demo, params);
export const sendToBookContestPardotInIframe = (demo, params, formHandler) =>
  sendToPardotInIframe(formHandler || BOOK_CONTEST_FORM_URL, demo, params);
export const sendToTshirtGiveawayPardotInIframe = (demo, params, formHandler) =>
  sendToPardotInIframe(formHandler || TSHIRT_GIVEAWAY_FORM_URL, demo, params);
export const sendToDemoChiliPiperPardotInIframe = (demo, params, formHandler) =>
  sendToPardotInIframe(
    formHandler || DEMO_CHILIPIPER_PARDOT_FORM_URL,
    demo,
    params,
    formHandler
  );
export const sendToDemoCmmsRadioInIframe = (demo, params, formHandler) =>
  sendToPardotInIframe(
    formHandler || DEMO_CMMMS_RADIO_FORM_URL,
    demo,
    params,
    formHandler
  );

const sendToPardotInIframe = (action, demo, params = null) => {
  const iframe = document.createElement('iframe');
  iframe.height = '0';
  iframe.width = '0';
  iframe.id = 'hidden_pardot_iframe';
  iframe.name = 'hidden_pardot_iframe';
  iframe.sandbox = 'allow-scripts allow-forms allow-same-origin';
  document.body.appendChild(iframe);

  const form = iframe.contentWindow.document.createElement('form');
  form.method = 'post';
  form.id = 'pardot-form';
  form.action = action;
  form.target = 'hidden_pardot_iframe';
  for (const field in demo) {
    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = field;
    hiddenField.value = demo[field];
    form.appendChild(hiddenField);
  }
  for (const field in params) {
    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = field;
    hiddenField.value = params[field];
    form.appendChild(hiddenField);
  }
  iframe.contentWindow.document.body.appendChild(form);
  form.submit();
};
