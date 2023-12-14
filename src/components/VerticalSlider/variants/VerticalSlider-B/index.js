import React, { createRef, useEffect, useState, useRef } from 'react';

import GatsbyImage from '../../../Image/GatsbyImage';
import HeadingComponent from '../../../HeadingComponent/HeadingComponent';

import Controls from './components/Controls';
import Slide from './components/Slide';

import { onScroll } from './utils';

import {
  Container,
  Heading,
  ImageTrack,
  StickyImageContainer,
  StickyImageWrapper,
  ImageWrapper,
  InnerWrapper,
  OuterWrapper,
  Section,
  TextTrack,
} from './styles/index.styled';

const VerticalSlider = ({ component }) => {
  const { verticalSlides } = component;

  const [slideHeights, setSlideHeights] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const controlsRef = useRef(null);
  const buttonRefs = verticalSlides.map(() => createRef());

  useEffect(() => {
    const handleScrollOrResize = () => {
      const rect = controlsRef.current?.getBoundingClientRect();
      const scrollPos = window.scrollY || window.pageYOffset;

      if (rect && rect.top <= 100 && scrollPos > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScrollOrResize);
    window.addEventListener('scroll', () =>
      onScroll({ setActiveSlide, controlsRef, buttonRefs })
    );
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('scroll', () =>
        onScroll({ setActiveSlide, controlsRef, buttonRefs })
      );
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [controlsRef, buttonRefs]);

  return (
    <Section>
      <OuterWrapper>
        <Heading>
          <HeadingComponent theme="light" {...component} />
        </Heading>
        <InnerWrapper>
          <Controls
            slides={verticalSlides}
            controlsRef={controlsRef}
            buttonRefs={buttonRefs}
            isScrolled={scrolled}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
          />
          <Container>
            <TextTrack>
              {verticalSlides.map((slide, index) => (
                <Slide
                  key={slide?.id}
                  index={index}
                  slide={slide}
                  setSlideHeights={setSlideHeights}
                  activeSlide={activeSlide}
                  setActiveSlide={setActiveSlide}
                />
              ))}
            </TextTrack>
            <ImageTrack>
              <StickyImageContainer imageHeight={slideHeights[activeSlide]}>
                <StickyImageWrapper>
                  {verticalSlides.map((slide, index) => (
                    <ImageWrapper
                      key={slide?.id}
                      className={activeSlide === index ? 'active' : ''}
                      imageHeight={slideHeights[index]}
                    >
                      <GatsbyImage
                        key={slide?.id}
                        src={slide?.image?.image?.gatsbyImageData}
                        alt={slide?.image?.image?.alt}
                      />
                    </ImageWrapper>
                  ))}
                </StickyImageWrapper>
              </StickyImageContainer>
            </ImageTrack>
          </Container>
        </InnerWrapper>
      </OuterWrapper>
    </Section>
  );
};

export default VerticalSlider;
