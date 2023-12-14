import React from 'react';
import GatsbyImage from '../../Image/GatsbyImage';
import CallToAction from '../../CallToAction';
import { generateSlug, getCardType, setImageSrc } from '../utils';
import {
  Container,
  Wrapper,
  Thumbnail,
  Text,
  HeadingKicker,
  Heading,
  Subhead,
  Button,
} from '../styles/ResourceHubSlide.styled';

const ResourceHubSlide = ({ component }) => (
  <Container>
    <Wrapper>
      <Thumbnail>
        <GatsbyImage src={setImageSrc(component)} alt={component?.heading} />
      </Thumbnail>
      <Text>
        <HeadingKicker className="kicker" type={getCardType(component?.id)}>
          {getCardType(component?.id)}
        </HeadingKicker>
        <Heading>{component?.heading}</Heading>
        <Subhead>{component?.metaTags?.description}</Subhead>
        <CallToAction
          url={generateSlug(
            component?.id,
            component?.slug || component?.node?.slug
          )}
          styles={Button}
        >
          Learn more
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.6499L6 6.6499L11 1.6499"
              stroke="#007BFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CallToAction>
      </Text>
    </Wrapper>
  </Container>
);

export default ResourceHubSlide;
