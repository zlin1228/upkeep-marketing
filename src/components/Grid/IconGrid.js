import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import CallToAction from '../CallToAction';
import {
  Section,
  Wrapper,
  Icons,
  Text,
  PrimaryButton,
} from './styles/IconGrid.styled';

const IconGrid = ({ component }) => (
  <Section>
    <Wrapper>
      <Icons>
        {component?.icons?.map(icon => (
          <GatsbyImage
            classes="icon"
            src={icon?.image?.gatsbyImageData || icon?.image?.url}
            alt={icon?.image?.alt}
            key={icon?.image?.url}
          />
        ))}
      </Icons>
      <Text dangerouslySetInnerHTML={{ __html: component?.subhead }} />
      <CallToAction
        url={component?.primaryCallToAction?.url}
        label={component?.primaryCallToAction?.label}
        styles={PrimaryButton}
        variant="Red"
      />
    </Wrapper>
  </Section>
);

export default IconGrid;
