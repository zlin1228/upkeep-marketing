import React from 'react';
import { Wrapper, NotReadyText, CallToAction } from './styles/FreeTrialSignup';

const FreeTrialSignup = props => {
  const url = props?.url
    ? props?.url.replace(`https://www.onupkeep.com`, '')
    : '/free-trial-signup';
  const label = 'Sign up for free';

  return (
    <Wrapper className="free-trial-signup">
      <NotReadyText
        theme={props?.theme ? props?.theme : 'Light'}
        className="mb-1"
      >
        Not ready yet?
      </NotReadyText>
      <CallToAction
        theme={props?.theme ? props?.theme : 'Light'}
        to={url}
        className="standalone-link"
      >
        {label}
      </CallToAction>
    </Wrapper>
  );
};

export default FreeTrialSignup;
