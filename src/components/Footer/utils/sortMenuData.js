import React from 'react';
import GooglePlay from '../../../assets/google-play-badge.svg';
import AppStore from '../../../assets/app-store-badge.svg';

const sortMenuItem = ({ order, data }) => {
  data.sort((a, b) => {
    return order.indexOf(a.id) > order.indexOf(b.id) ? 1 : -1;
  });
};
export const sortDesktopMenuData = (menuData, t) => {
  const desktopMenuData = [...menuData];

  const leftColumnData = desktopMenuData.slice(0, 3);
  leftColumnData.splice(2, 0, contactInfo(t));

  const rightColumnData = desktopMenuData.slice(3, 8);
  rightColumnData.push(socialMedia(t));
  rightColumnData.push(appInfo(t));

  return [leftColumnData, rightColumnData];
};

export const sortTabletMenuData = (menuData, t) => {
  const tabletMenuData = [...menuData];
  const leftColumnIds = [
    'DatoCmsMenuItem-120781640',
    'DatoCmsMenuItem-120781572',
    'DatoCmsMenuItem-120781655',
  ];

  const rightColumnIds = [
    'DatoCmsMenuItem-120781677',
    'DatoCmsMenuItem-120781692',
    'DatoCmsMenuItem-11130734',
    'DatoCmsMenuItem-11130747',
    'DatoCmsMenuItem-146528181',
  ];

  const leftColumnData = tabletMenuData.filter(item =>
    leftColumnIds.includes(item.id)
  );

  const rightColumnData = tabletMenuData.filter(item =>
    rightColumnIds.includes(item.id)
  );

  sortMenuItem({ order: leftColumnIds, data: leftColumnData });
  sortMenuItem({ order: rightColumnIds, data: rightColumnData });

  leftColumnData.push(contactInfo(t));
  leftColumnData.push(socialMedia(t));
  leftColumnData.push(appInfo(t));

  return [leftColumnData, rightColumnData];
};

export const sortMobileMenuData = (menuData, t) => {
  const mobileMenuData = [...menuData];
  const order = [
    'DatoCmsMenuItem-120781640',
    'DatoCmsMenuItem-120781572',
    'DatoCmsMenuItem-120781655',
    'DatoCmsMenuItem-120781677',
    'DatoCmsMenuItem-120781692',
    'DatoCmsMenuItem-11130734',
    'DatoCmsMenuItem-11130747',
    'DatoCmsMenuItem-146528181',
  ];

  sortMenuItem({ order, data: mobileMenuData });
  return [mobileMenuData, [contactInfo(t), socialMedia(t), appInfo(t)]];
};

export const socialMedia = t => ({
  id: 'socialMediaInfo',
  label: t('Connect with us'),
  childMenuItem: [
    {
      ariaLabel: 'YouTube',
      icon: 'fa-brands fa-youtube',
      linkUrl: 'https://www.youtube.com/channel/UC4ewS5K1zt6TOpZBfXx8Yfw',
      hasIcon: true,
    },
    {
      ariaLabel: 'Twitter',
      icon: 'fa-brands fa-square-twitter',
      linkUrl: 'https://twitter.com/onupkeep/',
      hasIcon: true,
    },
    {
      ariaLabel: 'Instagram',
      icon: 'fa-brands fa-square-instagram',
      linkUrl: 'https://www.instagram.com/upkeepaom/',
      hasIcon: true,
    },
    {
      ariaLabel: 'Facebook',
      icon: 'fa-brands fa-square-facebook',
      linkUrl: 'https://www.facebook.com/onupkeep/',
      hasIcon: true,
    },
    {
      ariaLabel: 'LinkedIn',
      icon: 'fa-brands fa-linkedin',
      linkUrl:
        'https://www.linkedin.com/company/upkeep-maintenance-management/',
      hasIcon: true,
    },
  ],
});

export const contactInfo = t => ({
  id: 'contactInfo',
  label: t('Contact'),
  childMenuItem: [
    {
      type: 'contact',
      icon: 'fa-solid fa-phone',
      label: '1 (323) 880-0280',
      linkUrl: 'tel:1 (323) 880-0280',
      hasIcon: true,
    },
    {
      type: 'contact',
      icon: 'fa-solid fa-comment-sms',
      label: '1 (866) 994-4119',
      linkUrl: 'tel:1 (866) 994-4119',
      hasIcon: true,
    },
    {
      type: 'contact',
      icon: 'fa-solid fa-calendar',
      label: 'Schedule a tour',
      linkUrl: '/demo',
      hasIcon: true,
    },
    {
      type: 'contact',
      icon: 'fa-solid fa-location-dot',
      label: '10880 Wilshire Blvd, Los Angeles, CA 90024',
      linkUrl:
        'https://www.google.com/maps/place/10880+Wilshire+Blvd,+Los+Angeles,+CA+90024/@34.0586531,-118.4453261,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bb7e2b42fadf:0xad96227841e11efb!8m2!3d34.0586531!4d-118.4431374',
      hasIcon: true,
    },
  ],
});

export const appInfo = t => ({
  id: 'appInfo',
  childMenuItem: [
    {
      ariaLabel: 'App Store',
      icon: (
        <img
          src={AppStore}
          alt="Apple App Store"
          width="120px"
          loading="lazy"
        />
      ),
      linkUrl:
        'https://apps.apple.com/us/app/upkeep-work-order-maintenance/id921799415',
      hasImage: true,
    },
    {
      ariaLabel: 'Google Play',
      icon: (
        <img src={GooglePlay} alt="Google Play" width="135px" loading="lazy" />
      ),
      linkUrl:
        'https://play.google.com/store/apps/details?id=com.onupkeep&hl=en_IN',
      hasImage: true,
    },
  ],
});
