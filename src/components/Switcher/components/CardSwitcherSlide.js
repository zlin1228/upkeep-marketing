import React from 'react';
import GatsbyImage from '../../Image/GatsbyImage';
import CallToAction from '../../CallToAction';
import {
  Container,
  Wrapper,
  Icon,
  Heading,
  Subhead,
  Features,
} from '../styles/CardSwitcherSlide.styled';

const CardSwitcherSlide = ({ component }) => (
  <Container
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Wrapper>
      <CallToAction url={component?.callToAction?.url} classes="clickable" />
      <Icon>
        <GatsbyImage
          src={component?.icon?.image?.url}
          alt={component?.icon?.image?.alt}
        />
      </Icon>
      <Heading>{component?.heading}</Heading>
      <Subhead>{component?.subhead}</Subhead>
      <Features dangerouslySetInnerHTML={{ __html: component?.features }} />
      <CallToAction
        url={component?.callToAction?.url}
        label={component?.callToAction?.label}
        variant="Red"
        size="xl"
      />
    </Wrapper>
  </Container>
);

export default CardSwitcherSlide;
