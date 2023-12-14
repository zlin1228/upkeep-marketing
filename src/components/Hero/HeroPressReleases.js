import React from 'react';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import CallToAction from '../CallToAction';
import {
  Section,
  Wrapper,
  Text,
  Buttons,
} from './styles/HeroPressReleases.styled';

const HeroPressReleases = ({
  component: { heading, subhead, callToAction, secondCallToAction },
}) => (
  <Section>
    <Wrapper>
      <Breadcrumbs theme="Dark" />
      <Text>
        {heading && <h1 className="heading">{heading}</h1>}
        {subhead && (
          <div
            className="subhead"
            dangerouslySetInnerHTML={{ __html: subhead }}
          />
        )}
        <Buttons>
          {callToAction?.url && (
            <CallToAction
              variant="Tertiary"
              size="xl"
              url={callToAction.url}
              label={callToAction?.label}
            />
          )}
          {secondCallToAction?.url && (
            <CallToAction
              variant="Secondary-Light"
              size="xl"
              url={secondCallToAction.url}
              label={secondCallToAction?.label}
            />
          )}
        </Buttons>
      </Text>
    </Wrapper>
  </Section>
);

export default HeroPressReleases;
