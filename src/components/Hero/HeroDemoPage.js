import React from 'react';
import SocialProof from '../../molecules/SocialProof';
import TrustBar from '../TrustBar';
import DemoForm from '../Forms/DemoForm';
import FeatureContent from './components/FeatureContent';
import UpKeepLogo from '../../assets/logo/upkeep-logo-white.svg';
import UpkeepLogoDark from '../../assets/upkeep-logo-color-dark.svg';
import {
  Container,
  BackgroundImage,
  Header,
  Section,
  HeadingWrapper,
  OuterWrapper,
  InnerWrapper,
  Column,
  Text,
  Subhead,
} from './styles/HeroDemoPage.styled';

const HeroDemoPage = ({ component, location }) => {
  if (!component) return null;
  const {
    theme,
    heading,
    subhead,
    featuredContent,
    showSocialProof,
    heroSocialProof,
    showTrustBar,
    trustBar,
  } = component;
  const bgTheme = theme === 'Light' ? 'light' : 'dark';

  return (
    <Container theme={bgTheme}>
      {bgTheme === 'light' && <BackgroundImage />}
      <Header>
        <img
          src={bgTheme === 'light' ? UpkeepLogoDark : UpKeepLogo}
          alt="UpKeep Logo"
          loading="lazy"
        />
      </Header>
      <Section>
        <HeadingWrapper theme={bgTheme}>
          {heading && <h1 className="heading">{heading}</h1>}
        </HeadingWrapper>
        <OuterWrapper theme={bgTheme}>
          <InnerWrapper>
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
                    theme={bgTheme}
                    dangerouslySetInnerHTML={{ __html: subhead }}
                  />
                )}
              </Text>
            </Column>
            <Column>
              <DemoForm location={location} />
              {showSocialProof && (
                <SocialProof showRating logos={heroSocialProof?.socialProof} />
              )}
            </Column>
          </InnerWrapper>
          {showTrustBar && <TrustBar component={trustBar} />}
        </OuterWrapper>
      </Section>
    </Container>
  );
};

export default HeroDemoPage;
