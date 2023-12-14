import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import SocialProof from '../../molecules/SocialProof';
import FreeTrialForm from '../Forms/FreeTrialForm';
import FeatureContent from './components/FeatureContent';
import UpKeepLogo from '../../assets/logo/upkeep-logo-color.svg';
import {
  Container,
  Header,
  Section,
  HeadingWrapper,
  Wrapper,
  Column,
  Text,
  Subhead,
} from './styles/HeroFreeTrialPage.styled';

const HeroFreeTrialPage = ({ component, location }) => {
  useEffect(() => {
    if (location.search === '?utm_source=salesentry') {
      navigate('/free-trial-signup-sales');
    }
  }, []);

  if (!component) return null;
  const {
    headingKicker,
    heading,
    subhead,
    featuredContent,
    showSocialProof,
    heroSocialProof,
  } = component;

  return (
    <Container>
      <Header>
        <img src={UpKeepLogo} alt="UpKeep Logo" loading="lazy" />
      </Header>
      <Section>
        {heading && (
          <HeadingWrapper>
            {headingKicker && <p className="heading-kicker">{headingKicker}</p>}
            {heading && <h1 className="heading">{heading}</h1>}
          </HeadingWrapper>
        )}
        <Wrapper>
          <Column>
            <Text>
              {featuredContent && (
                <FeatureContent
                  component={featuredContent}
                  theme={component?.theme}
                  location={location}
                />
              )}
              {subhead && (
                <Subhead
                  className="subhead"
                  dangerouslySetInnerHTML={{ __html: subhead }}
                />
              )}
            </Text>
            {showSocialProof && (
              <SocialProof showRating logos={heroSocialProof?.socialProof} />
            )}
          </Column>
          <Column>
            <FreeTrialForm location={location} />
          </Column>
        </Wrapper>
      </Section>
    </Container>
  );
};

export default HeroFreeTrialPage;
