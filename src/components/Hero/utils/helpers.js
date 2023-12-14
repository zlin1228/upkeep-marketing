export const renderText = component => {
  if (!component) return false;
  const { headingKicker, heading, subhead } = component;

  if (headingKicker || heading || subhead) return true;
  return false;
};

export const renderButtons = component => {
  if (!component) return false;

  const { callToAction, secondCallToAction } = component;

  if (callToAction || secondCallToAction) return true;
  return false;
};

export const renderVideoPopup = component => {
  if (!component) return false;

  const { showPopupVideo, videoModalComponent } = component;

  if (showPopupVideo && videoModalComponent) return true;
  return false;
};

export const renderTrustBar = component => {
  if (!component) return false;
  const { showTrustBar, trustBar } = component;
  if (showTrustBar && trustBar && trustBar?.variant !== 'Floating') return true;
  return false;
};

export const renderFloatingTrustBar = component => {
  if (!component) return false;
  const { showTrustBar, trustBar } = component;

  if (showTrustBar && trustBar && trustBar?.variant === 'Floating') return true;
  return false;
};
