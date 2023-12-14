import React from 'react';
import shortid from 'shortid';
import Card from './components/Card';
import FullWidthCard from './components/FullWidthCard';
import { Section, Wrapper, Header, Content, Grid } from './styles/index.styled';

const IntegrationsPanelGrid = ({
  headingKicker,
  heading,
  subhead,
  featuredIntegrations,
}) => (
  <Section>
    <Wrapper className="px-4">
      <Header>
        {headingKicker && <p className="heading-kicker">{headingKicker}</p>}
        {heading && <h2 className="heading">{heading}</h2>}
        {subhead && (
          <div
            className="subhead"
            dangerouslySetInnerHTML={{ __html: subhead }}
          />
        )}
      </Header>
      <Content>
        <FullWidthCard />
        <Grid>
          {featuredIntegrations?.map(integration => (
            <Card key={shortid.generate()} {...integration} />
          ))}
        </Grid>
      </Content>
    </Wrapper>
  </Section>
);

export default IntegrationsPanelGrid;
