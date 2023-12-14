import Cookies from 'js-cookie';
import axios from 'axios';
import { getPardotVisitorId, getUrlVars } from './demoFormUrlUtilities';
import { getUTMs } from '../../../utils/handleCookies';
import {
  sendToDemoPardotInIframe,
  sendToDemoChiliPiperPardotInIframe,
  sendToEmailPardotInIframe,
  sendToBlogSubscriptionPardotInIframe,
  sendToNewsletterPardotInIframe,
  sendToNewsletterSignupListPardotInIframe,
  sendToFreeTrialPardotInIframe,
  sendToFreeTrialSalesPardotInIframe,
  sendToGatedContentPardotInIframe,
  sendToEdgeContactPardotInIframe,
  sendToTestFormPardotInIframe,
  sendToExitIntentFormPardotInIframe,
  sendToStarterSubscriptionPardotInIframe,
  sendToRequestPricingPardotInIframe,
  sendToPartnerSignupPardotInIframe,
  sendToBookContestPardotInIframe,
  sendToTshirtGiveawayPardotInIframe,
  sendToDemoCmmsRadioInIframe,
} from './pardotIframe';

const SERVER_DEMO_ENDPOINT = 'https://upkeep-server.herokuapp.com/pardot/demo';
const SERVER_BLOG_SUBSCRIPTION_ENDPOINT =
  'https://upkeep-server.herokuapp.com/pardot/blog_subscription';
const EMAIL_ONLY_SCHEDULE_ENDPOINT =
  'https://upkeep-server.herokuapp.com/pardot/email_schedule';
const NEWSLETTER_SCHEDULE_ENDPOINT =
  'https://upkeep-server.herokuapp.com/pardot/newsletter';
const FREE_TRIAL_ENDPOINT =
  'https://upkeep-server.herokuapp.com/pardot/free-trial';
const GATED_CONTENT_ENDPOINT =
  'https://upkeep-server.herokuapp.com/pardot/gated_content';
const EDGE_CONTACT_FORM =
  'https://upkeep-server.herokuapp.com/pardot/edge_pricing';
const STARTER_SUBSCRIPTION_ENDPOINT =
  'https://upkeep-server.herokuapp.com/pardot/starter_subscription';

export default class PardotFormApi {
  static signUp(demo, formHandler) {
    Cookies.set('uk_user_data', JSON.stringify(demo));
    localStorage.setItem('uk_user_data', JSON.stringify(demo));

    const params = getUTMs();
    const visitorId = { visitor_id: getPardotVisitorId() };

    sendToDemoPardotInIframe(demo, params, formHandler);
    return axios.post(SERVER_DEMO_ENDPOINT, {
      ...params,
      ...demo,
      ...visitorId,
    });
  }

  static demoChiliPiper(demo, formHandler) {
    Cookies.set('uk_user_data', JSON.stringify(demo));
    localStorage.setItem('uk_user_data', JSON.stringify(demo));

    const params = getUTMs();

    sendToDemoChiliPiperPardotInIframe(demo, params, formHandler);
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }

  static blogSubscription(email) {
    Cookies.set('uk_email', email);

    sendToBlogSubscriptionPardotInIframe({ email });
    return axios.post(SERVER_BLOG_SUBSCRIPTION_ENDPOINT, {
      email,
      visitor_id: getPardotVisitorId(),
    });
  }

  static emailOnlySchedule(email) {
    Cookies.set('uk_email', email);
    sendToEmailPardotInIframe({ email });
    return axios.post(EMAIL_ONLY_SCHEDULE_ENDPOINT, {
      email,
      visitor_id: getPardotVisitorId(),
    });
  }

  static newsletterSignUp(email) {
    Cookies.set('uk_email', email);
    sendToNewsletterPardotInIframe({ email });
    return axios.post(NEWSLETTER_SCHEDULE_ENDPOINT, {
      email,
      visitor_id: getPardotVisitorId(),
    });
  }

  static newsletterSignUpList(email) {
    Cookies.set('uk_email', email);
    sendToNewsletterSignupListPardotInIframe({ email });
    return axios.post(NEWSLETTER_SCHEDULE_ENDPOINT, {
      email,
      visitor_id: getPardotVisitorId(),
    });
  }

  static freeTrialSignup(demo) {
    Cookies.set('uk_user_data', JSON.stringify(demo));
    localStorage.setItem('uk_user_data', JSON.stringify(demo));

    const params = getUTMs();
    const visitorId = { visitor_id: getPardotVisitorId() };

    sendToFreeTrialPardotInIframe(demo, params);
    return axios.post(FREE_TRIAL_ENDPOINT, {
      ...params,
      ...demo,
      ...visitorId,
    });
  }

  static freeTrialSignupSales(demo) {
    Cookies.set('uk_user_data', JSON.stringify(demo));
    localStorage.setItem('uk_user_data', JSON.stringify(demo));

    const params = getUTMs();
    const visitorId = { visitor_id: getPardotVisitorId() };

    sendToFreeTrialSalesPardotInIframe(demo, params);
    return axios.post(FREE_TRIAL_ENDPOINT, {
      ...params,
      ...demo,
      ...visitorId,
    });
  }

  static gatedContent(demo, handler) {
    Cookies.set('up_email', demo.email);
    sendToGatedContentPardotInIframe(demo, handler);
    return axios.post(GATED_CONTENT_ENDPOINT, { ...demo });
  }

  static edgeContact(demo) {
    Cookies.set('uk_user_data', JSON.stringify(demo));
    localStorage.setItem('uk_user_data', JSON.stringify(demo));

    const params = getUTMs();
    const visitorId = { visitor_id: getPardotVisitorId() };

    sendToEdgeContactPardotInIframe(demo, params);
    return axios.post(EDGE_CONTACT_FORM, {
      ...params,
      ...demo,
      ...visitorId,
    });
  }

  static testForm(demo) {
    Cookies.set('uk_user_data', JSON.stringify(demo));
    localStorage.setItem('uk_user_data', JSON.stringify(demo));

    const params = getUTMs();
    sendToTestFormPardotInIframe(demo, params);
  }

  static exitIntent(demo, formHandler) {
    Cookies.set('uk_user_data', JSON.stringify(demo));
    localStorage.setItem('uk_user_data', JSON.stringify(demo));

    const params = getUTMs();
    sendToExitIntentFormPardotInIframe(demo, params, formHandler);
  }

  static starterSubscription(demo) {
    Cookies.set('uk_user_data', JSON.stringify(demo));
    localStorage.setItem('uk_user_data', JSON.stringify(demo));

    const params = getUTMs();
    const visitorId = { visitor_id: getPardotVisitorId() };

    sendToStarterSubscriptionPardotInIframe(demo, params);
    return axios.post(STARTER_SUBSCRIPTION_ENDPOINT, {
      ...params,
      ...demo,
      ...visitorId,
    });
  }

  static requestPricing(demo) {
    const params = getUTMs();
    for (const field in params) {
      Cookies.set(field, params[field]);
    }
    sendToRequestPricingPardotInIframe(demo, params);
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }

  static partnerSignup(demo) {
    Cookies.set('uk_user_data', JSON.stringify(demo));
    localStorage.setItem('uk_user_data', JSON.stringify(demo));

    const params = getUTMs();
    sendToPartnerSignupPardotInIframe(demo, params);
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }

  static bookContest(demo, formHandler) {
    Cookies.set('uk_user_data', JSON.stringify(demo));
    localStorage.setItem('uk_user_data', JSON.stringify(demo));

    const params = getUrlVars();
    for (const field in params) {
      Cookies.set(field, params[field]);
    }

    sendToBookContestPardotInIframe(demo, params, formHandler);
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }

  static tshirtGiveaway(data, formHandler) {
    Cookies.set('uk_user_data', JSON.stringify(data));
    localStorage.setItem('uk_user_data', JSON.stringify(data));

    const params = getUrlVars();
    for (const field in params) {
      Cookies.set(field, params[field]);
    }

    sendToTshirtGiveawayPardotInIframe(data, params, formHandler);
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }

  static demoCmmsRadio(demo, formHandler) {
    Cookies.set('uk_user_data', JSON.stringify(demo));
    localStorage.setItem('uk_user_data', JSON.stringify(demo));

    const params = getUTMs();

    sendToDemoCmmsRadioInIframe(demo, params, formHandler);
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }
}
