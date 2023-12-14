import React from 'react';
import ExitIntent from './ExitIntent';
import useExitIntentData from './utils/useExitIntentData';
import useGoogleOptimize from '../../utils/useGoogleOptimize';

const ExitIntentTest = () => {
  const { datoCmsExitIntentComponent } = useExitIntentData();
  const variant = useGoogleOptimize(
    'WKzTroSjTQeQ5U23xpDnYQ',
    'optimize.activate.exit-intent-free-trial-test'
  );
  const variants = {
    0: <ExitIntent component={datoCmsExitIntentComponent} />,
    1: <ExitIntent component={datoCmsExitIntentComponent} showImage />,
  };
  return variants[variant] || null;
};

export default ExitIntentTest;
