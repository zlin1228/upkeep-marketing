import React from 'react';
import shortid from 'shortid';
import CallToAction from '../CallToAction';
import Card from './components/Card';
import {
  Section,
  Wrapper,
  Header,
  HeadingKicker,
  Heading,
  Subhead,
  PrimaryButton,
  Grid,
} from './styles/TestimonialGrid.styled';

const TestimonialGrid = ({ component }) => (
  <Section>
    <Wrapper>
      <Header>
        {component?.showHeadingKicker && (
          <HeadingKicker>{component?.headingKicker}</HeadingKicker>
        )}
        {component?.heading && <Heading>{component?.heading}</Heading>}
        <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
        <CallToAction
          url={component?.callToAction?.url}
          label={component?.callToAction?.label}
          styles={PrimaryButton}
        />
      </Header>
      <Grid>
        {component?.testimonial.map(testimonial => (
          <Card key={shortid.generate()} component={testimonial} />
        ))}
      </Grid>
    </Wrapper>
  </Section>
);

export default TestimonialGrid;
