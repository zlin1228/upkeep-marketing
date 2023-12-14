import React from 'react';

import Breadcrumbs from '../../molecules/Breadcrumbs';
import GatsbyImage from '../Image/GatsbyImage';
import CallToAction from '../CallToAction';

import UpKeepPledgeLogo from './assets/upkeep-pledge.png';

import {
  Buttons,
  InnerWrapper,
  OuterWrapper,
  Section,
  Text,
} from './styles/HeroUpKeepPledge.styled';

const HeroUpKeepPledge = ({ component }) => {
  const { heading, subhead, callToAction, secondCallToAction } = component;

  return (
    <Section>
      <OuterWrapper>
        <Breadcrumbs />
        <InnerWrapper>
          <Text>
            <div className="logo">
              <GatsbyImage src={UpKeepPledgeLogo} alt="UpKeep Pledge" />
            </div>
            {heading && <h1 className="heading">{heading}</h1>}
            {subhead && (
              <div
                className="subhead"
                dangerouslySetInnerHTML={{ __html: subhead }}
              />
            )}
          </Text>
          {(callToAction || secondCallToAction) && (
            <Buttons>
              {callToAction && (
                <CallToAction
                  {...callToAction}
                  variant="Filled - Red"
                  size="xxl"
                />
              )}
              {secondCallToAction && (
                <CallToAction
                  {...secondCallToAction}
                  variant="Outline - Dark"
                  size="xxl"
                />
              )}
            </Buttons>
          )}
        </InnerWrapper>
      </OuterWrapper>
    </Section>
  );
};

export default HeroUpKeepPledge;
