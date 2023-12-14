import React from 'react';
import {
  Frame,
  Text,
  Heading,
  Subhead,
  Icon,
  Button,
} from '../styles/BasicSlide.styled';
import CallToAction from '../../../CallToAction';
import GatsbyImage from '../../../Image/GatsbyImage';

import useSwipe from '../../../CardDeck/utils/useSwipe';

const BasicSlide = ({ component, activeSlide, idx, theme }) => {
  const { handleClick, handleMouseDown } = useSwipe();

  return (
    <Frame href={component?.callToAction?.url}>
      <Button
        url={component?.callToAction?.url}
        variant="Clickable"
        aria-label={component?.heading}
        onMouseDown={e => handleMouseDown(e)}
        onClick={e => handleClick(e, component?.callToAction?.url)}
      />
      <Icon>
        <GatsbyImage src={component?.icon?.gatsbyImageData} />
      </Icon>
      <Text>
        {component?.heading && (
          <Heading idx={idx} activeSlide={activeSlide} theme={theme}>
            {component?.heading}
          </Heading>
        )}
        {component?.subhead && (
          <Subhead
            dangerouslySetInnerHTML={{ __html: component?.subhead }}
            theme={theme}
          />
        )}
      </Text>
      <CallToAction
        url={component?.callToAction?.url}
        label={component?.callToAction?.label}
        variant="Link - White"
        icon="fa-solid fa-chevron-right"
      />
    </Frame>
  );
};

export default BasicSlide;
