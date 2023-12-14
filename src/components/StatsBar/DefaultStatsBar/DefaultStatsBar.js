import React from 'react';
import shortid from 'shortid';
import { StructuredText } from 'react-datocms';

import CallToAction from '../../CallToAction';
import TrustbarAddOn from '../../TrustBar/variants/TrustbarAddOn';

import {
  Section,
  Wrapper,
  Header,
  Gridline,
  Stats,
  StatWrapper,
  Stat,
  TrustbarWrapper,
  Disclaimer,
} from './DefaultStatsBar.styled';

const DefaultStatsBar = ({ component }) => (
  <Section theme={component?.theme}>
    <Gridline theme={component?.theme} />
    <Wrapper>
      {(component?.heading || component?.subhead) && (
        <Header theme={component?.theme}>
          {component?.heading && <h2>{component?.heading}</h2>}
          {component?.subhead && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: component?.subhead }}
            />
          )}
        </Header>
      )}
      {component?.callToAction && (
        <CallToAction
          url={component?.callToAction?.url}
          variant="Link - Dark"
          nextIcon="fa-solid fa-chevron-right"
        >
          {component?.callToAction?.label}
        </CallToAction>
      )}
      <Stats>
        {component?.statistic?.map(stat => (
          <StatWrapper key={shortid.generate()} theme={component?.theme}>
            <Stat theme={component?.theme}>
              {stat?.heading && (
                <div
                  className="stat-heading"
                  dangerouslySetInnerHTML={{ __html: stat.heading }}
                />
              )}
              {stat?.subhead && (
                <div
                  className="stat-description"
                  dangerouslySetInnerHTML={{ __html: stat?.subhead }}
                />
              )}
            </Stat>
          </StatWrapper>
        ))}
      </Stats>
      {component?.showTrustbar && (
        <TrustbarWrapper theme={component?.theme}>
          <TrustbarAddOn component={component?.trustbar} />
        </TrustbarWrapper>
      )}
    </Wrapper>
    <Gridline theme={component?.theme} />
    <Disclaimer theme={component?.theme}>
      <StructuredText data={component?.structuredDisclaimer} />
    </Disclaimer>
  </Section>
);

export default DefaultStatsBar;
