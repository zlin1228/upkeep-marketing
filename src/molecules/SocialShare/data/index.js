const socialData = slug => [
  {
    name: 'x',
    url: `http://www.twitter.com/intent/tweet?url=https://www.upkeep.com${slug}&via=UpKeep`,
    icon: 'fa-brands fa-twitter',
    ariaLabel: 'Share on X',
  },
  {
    name: 'linkedin',
    url: `https://www.linkedin.com/sharing/share-offsite/?url=https://www.upkeep.com${slug}`,
    icon: 'fa-brands fa-linkedin',
    ariaLabel: 'Share on LinkedIn',
  },
  {
    name: 'facebook',
    url: `http://www.facebook.com/sharer/sharer.php?u=https://www.upkeep.com${slug}`,
    icon: 'fa-brands fa-facebook',
    ariaLabel: 'Share on Facebook',
  },
];

export default socialData;
