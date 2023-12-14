import React from 'react';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import ReviewHeroStat from './components/ReviewHeroStat';
import {
  Section,
  Wrapper,
  Text,
  Container,
} from './styles/HeroReviewsListingPage.styled';

const HeroReviewsListingPage = ({ component }) => {
  if (!component) return null;

  const { headingKicker, heading, subhead } = component;
  return (
    <Section>
      <Wrapper>
        <Breadcrumbs theme="Light" />
        <Text>
          {headingKicker && <p className="heading-kicker">{headingKicker}</p>}
          {heading && <h1 className="heading">{heading}</h1>}
          {subhead && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: subhead }}
            />
          )}
        </Text>
        <Container>
          <ReviewHeroStat heading="2000+" subhead="Unique Reviews" />
          <ReviewHeroStat
            className="desktop-rating"
            showRating
            subhead="4.75/5 Average Rating"
          />
          <ReviewHeroStat heading="6000+" subhead="Happy Customers" />
          <ReviewHeroStat
            className="mobile-rating"
            showRating
            subhead="4.75/5 Average Rating"
          />
        </Container>
      </Wrapper>
    </Section>
  );
};

export default HeroReviewsListingPage;
