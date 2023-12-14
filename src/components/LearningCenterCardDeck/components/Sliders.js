/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { useWindowSize } from 'react-use';
import shortid from 'shortid';

import CardComponent from '../../Cards/Card';
import Icon from '../../../molecules/Icon';

import { getSlidesToShow, settings } from '../utils/helpers';

import { Container, Controls } from '../styles/Sliders.styled';

const Sliders = ({ activeCardDeck }) => {
  const { width } = useWindowSize();

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow(width));
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [dots, setDots] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    sliderRef.current.slickPrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current.slickNext();
  }, []);

  useEffect(() => {
    const totalSlides = activeCardDeck?.cards?.length || 0;
    const slides = getSlidesToShow(width);

    setSlidesToShow(slides);
    setDots(Math.ceil(totalSlides / slidesToShow));
    setActiveDotIndex(Math.floor(activeSlideIndex / slidesToShow));
  }, [width, activeCardDeck?.cards?.length, activeSlideIndex, slidesToShow]);

  return (
    <Container>
      <Slider ref={sliderRef} {...settings(setActiveSlideIndex)}>
        {activeCardDeck?.cards?.map(card => (
          <CardComponent key={card?.id} card={card} />
        ))}
      </Slider>
      <Controls>
        <div className="arrows">
          <button type="button" className="prev" onClick={handlePrev}>
            <Icon id="fa-solid fa-chevron-left" width="20px" height="20px" />
          </button>
          <button type="button" className="next" onClick={handleNext}>
            <Icon id="fa-solid fa-chevron-right" width="20px" height="20px" />
          </button>
        </div>
        <div className="dots">
          {[...Array(dots)].map((_, dotIndex) => {
            const scrollToIndex = dotIndex * slidesToShow;
            const isActive = dotIndex === activeDotIndex;

            return (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Slide ${dotIndex + 1}`}
                className={isActive ? 'active' : ''}
                onClick={() => sliderRef.current.slickGoTo(scrollToIndex)}
              />
            );
          })}
        </div>
      </Controls>
    </Container>
  );
};

export default Sliders;
