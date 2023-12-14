import React, { useState, useRef, useEffect } from 'react';
import ReactSlider from 'react-slick';
import GatsbyImage from '../Image/GatsbyImage';
import SwitcherHeader from './components/SwitcherHeader';
import SwitchbackSwitcherSlide from './components/SwitchbackSwitcherSlide';
import SwitchbackSwitcherControls from './components/SwitchbackSwitcherControls';
import handleDraggable from './utils/handleDraggable';
import { SwitchbackSwitcherSettings } from './utils/switcherSettings';
import {
  Section,
  Header,
  Wrapper,
  Slide,
  Container,
} from './styles/SwitchbackSwitcher.styled';
import shortid from 'shortid';

const SwitchbackSwitcher = ({ component }) => {
  const imgSliderRef = useRef();
  const detailsSliderRef = useRef();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [draggable, setDraggable] = useState(false);

  useEffect(() => {
    handleDraggable(setDraggable);
  }, []);

  return (
    <Section theme={component?.switchbackSwitcherTheme}>
      <Header>
        <SwitcherHeader component={component} />
      </Header>
      <Wrapper reverse={component?.reverse}>
        <ReactSlider
          className="img-slider"
          ref={imgSliderRef}
          {...SwitchbackSwitcherSettings(setActiveSlideIndex, draggable)}
        >
          {component?.switchbackSlide?.map(slide => (
            <Slide key={shortid.generate()}>
              <GatsbyImage
                src={slide?.image?.gatsbyImageData}
                alt={slide?.image?.alt}
              />
            </Slide>
          ))}
        </ReactSlider>
        <Container>
          <ReactSlider
            ref={detailsSliderRef}
            {...SwitchbackSwitcherSettings(setActiveSlideIndex, draggable)}
          >
            {component?.switchbackSlide?.map(slide => (
              <SwitchbackSwitcherSlide
                key={shortid.generate()}
                component={slide}
              />
            ))}
          </ReactSlider>
          <SwitchbackSwitcherControls
            slides={component?.switchbackSlide}
            reverse={component?.reverse}
            imgSliderRef={imgSliderRef}
            detailsSliderRef={detailsSliderRef}
            activeSlideIndex={activeSlideIndex}
            setActiveSlideIndex={setActiveSlideIndex}
          />
        </Container>
      </Wrapper>
    </Section>
  );
};

export default SwitchbackSwitcher;
