import React, { useRef, useEffect, useState } from 'react';
import { getSlideWidth } from '../utils/sliderUtils';
import GatsbyImage from '../../Image/GatsbyImage';
import CallToAction from '../../CallToAction';
import useSwipe from '../utils/useSwipe';
import useIsHovered from '../../../hooks/useIsHovered';
import { Container, Body, Text, Thumbnail } from '../styles/Slide.styled';

const Slide = ({ component }) => {
  const slideRef = useRef();
  const [slideWidth, setSlideWidth] = useState('');
  const { handleClick, handleMouseDown } = useSwipe();
  const isHovered = useIsHovered(slideRef);

  useEffect(() => {
    setSlideWidth(getSlideWidth());
    window.addEventListener('resize', () => {
      setSlideWidth(getSlideWidth());
    });
  }, []);

  return (
    <div
      style={{ width: slideWidth, height: '100%' }}
      className="slide"
      ref={slideRef}
    >
      <Container theme={component?.backgroundColor}>
        <button
          type="button"
          aria-label="Card Button"
          className="clickable"
          onMouseDown={e => handleMouseDown(e)}
          onClick={e => handleClick(e, component?.callToAction?.url)}
        />
        {component?.thumbnail && (
          <Thumbnail>
            <GatsbyImage
              src={component?.thumbnail?.image?.gatsbyImageData}
              alt={component?.thumbnail?.image?.alt}
            />
          </Thumbnail>
        )}
        <Body theme={component?.backgroundColor}>
          <Text>
            <h6 className="heading-kicker">{component?.headingKicker}</h6>
            <h3 className="heading">{component?.heading}</h3>
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: component?.subhead }}
            />
          </Text>
          <CallToAction
            url={component?.callToAction?.url}
            label="Learn More"
            variant="Red-Arrow-Link"
            icon="fa-solid fa-chevron-right"
            classes={isHovered ? 'hovered' : ''}
          />
        </Body>
      </Container>
    </div>
  );
};

export default Slide;
