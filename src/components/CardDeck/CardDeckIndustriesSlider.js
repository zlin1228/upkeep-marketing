import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import IndustriesSlide from './components/IndustriesSlide';
import {
  Section,
  Header,
  Container,
  Controls,
  Dot,
  Button,
} from './styles/CardDeckIndustriesSlider.styled';

const settings = setActiveSlideIndex => ({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  afterChange: current => setActiveSlideIndex(current),
});

const CardDeckIndustriesSlider = ({ component }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (activeSlideIndex !== 0) {
      sliderRef.current.slickGoTo(activeSlideIndex - 1);
      setActiveSlideIndex(activeSlideIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeSlideIndex < card.length - 1) {
      sliderRef.current.slickGoTo(activeSlideIndex + 1);
      setActiveSlideIndex(activeSlideIndex + 1);
    }
  };

  if (!component) return null;
  const { heading, subhead, card } = component;

  return (
    <Section>
      <Header>
        {heading && <h2 className="heading">{heading}</h2>}
        {subhead && (
          <div
            className="subhead"
            dangerouslySetInnerHTML={{ __html: subhead }}
          />
        )}
      </Header>
      {card && card?.length > 0 ? (
        <Container>
          <Slider ref={sliderRef} {...settings(setActiveSlideIndex)}>
            {card?.map(item => (
              <IndustriesSlide key={item?.id} component={item} />
            ))}
          </Slider>
          <Controls>
            <Button type="button" onClick={() => handlePrev()}>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.43431 16.0808C9.12189 16.3932 9.12189 16.8997 9.43431 17.2122L14.5255 22.3033C14.8379 22.6158 15.3444 22.6158 15.6569 22.3033C15.9693 21.9909 15.9693 21.4844 15.6569 21.172L11.1314 16.6465L15.6569 12.121C15.9693 11.8086 15.9693 11.302 15.6569 10.9896C15.3444 10.6772 14.8379 10.6772 14.5255 10.9896L9.43431 16.0808ZM22 15.8465L10 15.8465L10 17.4465L22 17.4465L22 15.8465Z"
                  fill="#081A28"
                />
                <rect
                  x="31.5"
                  y="32.1465"
                  width="31"
                  height="31"
                  rx="15.5"
                  transform="rotate(-180 31.5 32.1465)"
                  stroke="#081A28"
                />
              </svg>
            </Button>
            {card?.map((item, index) => (
              <Dot
                key={item?.id}
                className={activeSlideIndex === index ? 'active' : ''}
                onClick={() => {
                  sliderRef.current.slickGoTo(index);
                  setActiveSlideIndex(index);
                }}
              >
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.5"
                    cx="4"
                    cy="4.1272"
                    r="4"
                    fill="#EF6D6D"
                  />
                </svg>
              </Dot>
            ))}
            <Button type="button" onClick={() => handleNext()}>
              {' '}
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5657 17.2122C22.8781 16.8998 22.8781 16.3932 22.5657 16.0808L17.4745 10.9896C17.1621 10.6772 16.6556 10.6772 16.3431 10.9896C16.0307 11.3021 16.0307 11.8086 16.3431 12.121L20.8686 16.6465L16.3431 21.172C16.0307 21.4844 16.0307 21.9909 16.3431 22.3033C16.6556 22.6158 17.1621 22.6158 17.4745 22.3033L22.5657 17.2122ZM10 17.4465L22 17.4465L22 15.8465L10 15.8465L10 17.4465Z"
                  fill="#081A28"
                />
                <rect
                  x="0.5"
                  y="1.14648"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#081A28"
                />
              </svg>
            </Button>
          </Controls>
        </Container>
      ) : null}
    </Section>
  );
};

export default CardDeckIndustriesSlider;
