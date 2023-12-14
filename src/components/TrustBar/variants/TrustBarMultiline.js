import React from 'react';
import Slider from 'react-slick';
import { GatsbyImage } from 'gatsby-plugin-image';

import HeadingComponent from '../../HeadingComponent/HeadingComponent';

import { settingsSlow, settingsFast } from '../utils/multilineSettings';

import {
  Section,
  HeadingWrapper,
  SliderItem,
  Icon,
  Sliders,
  OverlayLeft,
  OverlayRight,
} from '../styles/TrustBarMultiline.styled';

const TrustBarMultiline = ({ component }) => {
  const {
    headingKicker,
    heading,
    subhead,
    primaryButton,
    secondaryButton,
  } = component;

  return (
    <Section>
      <HeadingWrapper>
        <HeadingComponent
          theme="light"
          headingKicker={headingKicker}
          heading={heading}
          subhead={subhead}
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
        />
      </HeadingWrapper>
      <Sliders>
        <OverlayLeft />
        {component?.iconRows.map((row, idx) => (
          <Slider key={row?.id} {...(idx === 1 ? settingsFast : settingsSlow)}>
            {row?.icons.map(icon => (
              <SliderItem key={icon?.id} href={icon?.callToAction?.url}>
                <Icon>
                  <GatsbyImage
                    image={icon?.icon?.image?.gatsbyImageData}
                    alt={icon?.name}
                  />
                </Icon>
                {icon?.name}
              </SliderItem>
            ))}
          </Slider>
        ))}
        <OverlayRight />
      </Sliders>
    </Section>
  );
};

export default TrustBarMultiline;
