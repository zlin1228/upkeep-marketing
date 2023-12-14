import React from 'react';

import CallToAction from '../../CallToAction';
import GatsbyImage from '../../Image/GatsbyImage';

import UpKeepPledgeDark from '../../../assets/logo/upkeep-pledge-dark.svg';

import { Container, Subhead, Text, Wrapper } from '../styles/Item.styled';

const Item = ({ item, id, activeItem }) => {
  const {
    theme,
    showPledgeIcon,
    hideEyebrowText,
    eyebrow,
    headingSize,
    heading,
    subhead,
    callToAction,
    image,
  } = item;

  const hasImage = image?.image?.gatsbyImageData;

  return (
    <Container
      id={id}
      theme={theme}
      activeItem={activeItem}
      hasImage={hasImage}
    >
      <Wrapper>
        {showPledgeIcon && (
          <GatsbyImage src={UpKeepPledgeDark} alt="UpKeep Pledge" />
        )}
        <Text
          theme={theme}
          showPledgeIcon={showPledgeIcon}
          headingSize={headingSize}
        >
          {!hideEyebrowText && eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {heading && <p className="heading">{heading}</p>}
        </Text>
        {subhead && (
          <Subhead
            theme={theme}
            dangerouslySetInnerHTML={{ __html: subhead }}
          />
        )}
        <CallToAction variant="Outline - Dark" size="md" {...callToAction} />
      </Wrapper>
      <GatsbyImage src={image?.image?.gatsbyImageData} alt={image?.alt} />
    </Container>
  );
};

export default Item;
