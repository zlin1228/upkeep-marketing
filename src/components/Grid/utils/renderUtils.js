export const renderHeaderText = (
  headingKicker,
  heading,
  subhead,
  primaryCallToAction,
  secondaryCallToAction
) => {
  if (
    !headingKicker &&
    !heading &&
    !subhead &&
    !primaryCallToAction?.url &&
    !secondaryCallToAction?.url
  ) {
    return false;
  }
  return true;
};

export const renderHeaderMedia = (image, video) => {
  if (
    !image?.image?.gatsbyImageData &&
    !image?.image?.url &&
    !video?.youtubeUrl
  ) {
    return false;
  }
  return true;
};
