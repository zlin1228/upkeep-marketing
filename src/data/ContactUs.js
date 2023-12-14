import React from 'react';

import CallToAction from '../components/CallToAction';

const contactData = [
  {
    icon: 'fa-solid fa-paper-plane',
    heading: 'Email',
    subhead: (
      <>
        <p> For Questions about billing, support and feedback:</p>
        <CallToAction
          url="mailto:info@onupkeep.com"
          label="Contact Support"
          variant="Filled - Dark"
          size="md"
        />
        <p>For information about pricing:</p>
        <CallToAction
          url="mailto:sales@onupkeep.com"
          label="Contact Sales"
          variant="Filled - Dark"
          size="md"
        />
      </>
    ),
  },
  {
    icon: 'fa-solid fa-phone',
    heading: 'Phone',
    subhead: (
      <>
        <p> For Questions and Support:</p>
        <p>
          <strong>US/Canada: 323-880-0280</strong>
        </p>
        <CallToAction
          url="tel:+13238800280"
          label="Call Us"
          variant="Filled - Dark"
          size="md"
        />
        <p>
          <strong>International : (866) 817-3778</strong>
        </p>
        <CallToAction
          url="tel:+(866) 817-3778"
          label="Call Us"
          variant="Filled - Dark"
          size="md"
        />
      </>
    ),
  },
  {
    icon: 'fa-solid fa-comment-sms',
    heading: 'SMS',
    subhead: (
      <>
        <p>
          <strong>For 24/7 Live Chat Support:</strong>
        </p>
        <p>
          <strong>SMS: (866) 994-4119</strong>
        </p>
        <CallToAction
          url="tel:1 (866) 994-4119"
          label="Text Now"
          variant="Filled - Dark"
          size="md"
        />
      </>
    ),
  },
  {
    icon: 'fa-solid fa-house',
    heading: 'Address',
    subhead: (
      <>
        <p> 10880 Wilshire Blvd. Suite #850</p>
        <p>Los Angeles, CA 90024</p>
        <p>
          <strong>Office Hours: 6:00AM to 7:00PM</strong>
        </p>
        <p>
          <strong>Pacific Time Monday-Friday</strong>
        </p>
      </>
    ),
  },
];

export default contactData;
