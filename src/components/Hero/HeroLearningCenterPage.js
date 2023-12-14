import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Search from '../../molecules/Search/Search';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import ColoredLearningCard from '../Cards/ColoredLearningCard';
import { useLearningData } from './utils/useLearningData';
import useLazyLoadSlider from '../../hooks/useLazyLoadSlider';
import {
  Section,
  Wrapper,
  Container,
  Carousel,
  Controls,
  Dot,
} from './styles/HeroLearningCenterPage.styled';

const settings = setActiveSlideIndex => ({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
  afterChange: index => setActiveSlideIndex(index),
});

const setCardTheme = index => {
  if (index % 4 === 0) return 'primary';
  if (index % 4 === 1) return 'darkBlue';
  if (index % 4 === 2) return 'steel';
  return 'darkBlue';
};

const HeroLearningCenterPage = ({ component, location }) => {
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { allDatoCmsLearningPost } = useLearningData();
  const posts = allDatoCmsLearningPost?.edges;
  useLazyLoadSlider();

  if (!component) return null;
  const { heading, subhead, featuredLearningArticles } = component;

  return (
    <Section>
      <Wrapper>
        <Breadcrumbs theme="Light" location={location} />
        <Container>
          {heading && <h1 className="heading">{heading}</h1>}
          {subhead && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: subhead }}
            />
          )}
          <Search data={posts} prefix="/learning" />
        </Container>
      </Wrapper>
      <Carousel>
        <Slider ref={sliderRef} {...settings(setActiveSlideIndex)}>
          {featuredLearningArticles?.map((item, index) => (
            <ColoredLearningCard theme={setCardTheme(index)} component={item} />
          ))}
        </Slider>
        <Controls>
          {featuredLearningArticles?.map((item, index) => (
            <Dot
              key={item?.id}
              className={activeSlideIndex === index ? 'active' : ''}
              onClick={() => {
                sliderRef.current.slickGoTo(index);
              }}
            />
          ))}
        </Controls>
      </Carousel>
    </Section>
  );
};

export default HeroLearningCenterPage;
