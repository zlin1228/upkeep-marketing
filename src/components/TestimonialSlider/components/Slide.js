import React, { useEffect, useState } from 'react';
import Stars from '../../TestimonialComponent/components/Stars';
import { getSlideWidth } from '../utils';
import { Container, Author } from '../styles/Slide.styled';

const Slide = ({ component }) => {
  const [slideWidth, setSlideWidth] = useState('');

  useEffect(() => {
    setSlideWidth(getSlideWidth());
    window.addEventListener('resize', () => {
      setSlideWidth(getSlideWidth());
    });
  }, []);

  return (
    <div style={{ width: slideWidth, height: '100%' }} className="slide">
      <Container>
        <div>
          {!component?.hideStars && <Stars rating={5} />}
          <h6>{component?.title}</h6>
          <div dangerouslySetInnerHTML={{ __html: component?.quote }} />
        </div>
        <Author>
          <h6 className="name">
            {component?.person?.firstName} {component?.person?.lastName}
          </h6>
          <h6 className="company">{component?.company?.name}</h6>
        </Author>
      </Container>
    </div>
  );
};

export default Slide;
