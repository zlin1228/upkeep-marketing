import React from 'react';
import shortid from 'shortid';

import CallToAction from '../../CallToAction';
import HeadingComponent from '../../HeadingComponent/HeadingComponent';

import {
  Section,
  Wrapper,
  Content,
  Logos,
  Logo,
  Quote,
  Testimonial,
  Name,
} from '../styles/TrustbarTestimonial.styled';

const TrustBarTestimonial = ({ component }) => {
  const {
    headingKicker,
    heading,
    subhead,
    primaryButton,
    secondaryButton,
    trustbarTestimonial,
  } = component;
  const testimonialName = `${trustbarTestimonial?.person?.firstName} ${trustbarTestimonial?.person?.lastName}`;

  return (
    <Section
      className="trustbar-wrapper"
      background={component?.backgroundColor}
    >
      <Wrapper className="trustbar-container">
        <HeadingComponent
          theme="light"
          headingKicker={headingKicker}
          heading={heading}
          subhead={subhead}
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
        />
        <Content>
          <Logos>
            {component?.company?.map(node => (
              <Logo key={shortid.generate()}>
                <img
                  src={node?.logo?.image?.url}
                  alt={node?.logo?.image?.alt}
                />
              </Logo>
            ))}
          </Logos>
          <Testimonial>
            <Quote
              dangerouslySetInnerHTML={{
                __html: trustbarTestimonial?.quote,
              }}
            />
            <Name>
              {`${testimonialName}`}
              <br />
              <span>{trustbarTestimonial?.industry?.name}</span>
            </Name>
            <CallToAction
              url={trustbarTestimonial?.button?.url}
              label={trustbarTestimonial?.button?.label}
              variant="Red-Arrow-Link"
              icon="fa-solid fa-chevron-right"
            />
          </Testimonial>
        </Content>
      </Wrapper>
    </Section>
  );
};

export default TrustBarTestimonial;
