import React from 'react';
import CallToAction from '../CallToAction';
import {
  Section,
  Wrapper,
  Header,
  HeadingKicker,
  Heading,
  Subhead,
  Buttons,
  PrimaryButton,
  SecondaryButton,
  Grid,
  FAQ,
  Answer,
  Question,
} from './styles/FAQGrid';

const FAQGrid = ({ component }) => (
  <Section>
    <Wrapper>
      <Header>
        <HeadingKicker>{component?.headingKicker}</HeadingKicker>
        <Heading>{component?.heading}</Heading>
        <Subhead>{component?.subhead}</Subhead>
        <Buttons>
          <CallToAction
            url={component?.primaryCallToAction?.url}
            label={component?.primaryCallToAction?.label}
            styles={PrimaryButton}
          />
          <CallToAction
            url={component?.secondaryCallToAction?.url}
            label={component?.secondaryCallToAction?.label}
            classes="arrow-link"
            styles={SecondaryButton}
          />
        </Buttons>
      </Header>
      <Grid>
        {component?.faqs?.map(faq => (
          <FAQ key={faq?.question}>
            <Question>{faq?.question}</Question>
            <Answer dangerouslySetInnerHTML={{ __html: faq?.answer }} />
          </FAQ>
        ))}
      </Grid>
    </Wrapper>
  </Section>
);

export default FAQGrid;
