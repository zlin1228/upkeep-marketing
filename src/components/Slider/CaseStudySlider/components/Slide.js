import React from 'react';
import {
  Frame,
  Content,
  Heading,
  Subhead,
  CtaStyles,
  Button,
  Tag,
} from '../styles/Slide.styled';
import CallToAction from '../../../CallToAction';
import useSwipe from '../../../CardDeck/utils/useSwipe';

const Slide = ({ component }) => {
  const { handleClick, handleMouseDown } = useSwipe();

  return (
    <Frame bgImage={component?.image?.url}>
      <Button
        url={component?.callToAction?.url}
        variant="Clickable"
        aria-label={component?.heading}
        onMouseDown={e => handleMouseDown(e)}
        onClick={e => handleClick(e, component?.callToAction?.url)}
      />
      <Content>
        {component?.typeTag && <Tag>{component?.typeTag}</Tag>}
        <Heading>{component?.heading}</Heading>
        <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
        <CallToAction
          url={component?.callToAction?.url}
          label={component?.callToAction?.label}
          nextIcon="fa-solid fa-chevron-right"
          variant="Link - White"
          styles={CtaStyles}
          classes="card-cta"
        />
      </Content>
    </Frame>
  );
};

export default Slide;
