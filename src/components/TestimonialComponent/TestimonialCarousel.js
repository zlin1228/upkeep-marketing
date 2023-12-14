import React from 'react';
import Slider from 'react-slick';
import { Link } from 'gatsby';
import GatsbyImage from '../Image/GatsbyImage';
import Slide from './components/Slide';
import SocialProofImages from '../SocialProof/SocialProofImages';
import sliderSettings from './utils/sliderSettings';
import starimage from '../../assets/five-stars.svg';
import {
  Section,
  Wrapper,
  Row,
  Details,
  HeadingKicker,
  Heading,
  Subhead,
  StyledSlider,
  SocialProofWrapper,
} from './styles/TestimonialCarousel.styled';

const TestimonialCarousel = ({ component }) => (
  <Section>
    <Wrapper>
      <Row className="heading">
        {component?.showHeadingKicker && (
          <HeadingKicker color={component?.headingKickerColor}>
            {component?.headingKicker}
          </HeadingKicker>
        )}
        {component?.heading && <Heading>{component?.heading}</Heading>}
        {component?.subhead && (
          <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
        )}
      </Row>
      <Row className="content">
        <Details>
          <h4>Excellent</h4>
          <GatsbyImage src={starimage} alt="stars" />
          <p>
            Based on 1500+ reviews on Capterra, G2, SoftwareAdvice and Google.
          </p>
          <Link to="/demo" className="arrow-link">
            Get Started Today
          </Link>
        </Details>
        <StyledSlider>
          <Slider {...sliderSettings}>
            {component?.testimonial?.map(item => {
              return <Slide component={item} key={item?.id} />;
            })}
          </Slider>
        </StyledSlider>
      </Row>
      <Row>
        {component?.showSocialProof && (
          <SocialProofWrapper>
            <SocialProofImages data={component?.socialProof} align="left" />
          </SocialProofWrapper>
        )}
      </Row>
    </Wrapper>
  </Section>
);

export default TestimonialCarousel;
