export const setHeroData = data => ({
  theme: 'Light',
  showHeadingKicker: true,
  headingKicker: 'UpKeep is the #1 Mobile-First CMMS Trusted by 110,000+ Users',
  heading: 'Work order and maintenance software that’s easy to use',
  subhead:
    '<p>Papertrails and complicated software make your life harder. UpKeep makes assigning work orders simple. Switch over to the only maintenance software that anyone can learn</p>',
  featuredContent: {
    internal: {
      type: 'DatoCmsWebsiteForm',
    },
    variant: 'trial',
    id: 'free-trial-form',
    salesform: data?.salesform,
  },
  heroSocialProof: {
    headingKicker: '',
    heading: '',
    subhead: '',
    showHeadingKicker: false,
    theme: 'Full Color',
    socialProof: [
      {
        internalName: 'Google Logo',
        image: {
          url:
            'https://www.datocms-assets.com/38028/1608421473-580b57fcd9996e24bc43c51f.png',
        },
      },
      {
        internalName: 'Capterra Logo',
        image: {
          url: 'https://www.datocms-assets.com/38028/1608421410-capterra.png',
        },
      },

      {
        internalName: 'Software Advice Logo',
        image: {
          url:
            'https://www.datocms-assets.com/38028/1608421541-6e29b7c3-22c3-495a-86dc-4088043086c5.png',
        },
      },
      {
        internalName: 'G2 Logo',
        image: {
          url:
            'https://www.datocms-assets.com/38028/1608421573-1200px-g2crowdlogo-svg.png',
        },
      },
    ],
  },
});
