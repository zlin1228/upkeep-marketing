import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import HeaderComponent from '../components/Header';
import HeroSwitchback from '../components/Hero/HeroSwitchback';
import CardDeck from '../components/CardDeck/CardDeck';
import ConversionPanel from '../components/ConversionPanel';
import conversionPanelData from '../components/ConversionPanel/data/defaultData';
import FooterComponent from '../components/Footer';
import useFeatures from '../components/FeaturesPage/useFeatures';
import heroData from '../components/FeaturesPage/heroData';
import {
  Main,
  HeroStyles,
  CardDeckWrapperA,
  CardDeckWrapperB,
} from '../styles/Pages/Features';

const FeaturesPage = () => {
  const { featuresCardDeckA, featuresCardDeckB } = useFeatures();
  return (
    <Layout>
      <HeaderComponent theme="Transparent - Light" />
      <Main>
        <HeroStyles>
          <HeroSwitchback content={heroData} theme="dark" />
        </HeroStyles>
        <CardDeckWrapperA>
          <CardDeck component={featuresCardDeckA.edges[0].node} />
        </CardDeckWrapperA>
        <CardDeckWrapperB>
          <h4>More Maintenance Features</h4>
          <CardDeck component={featuresCardDeckB.edges[0].node} />
        </CardDeckWrapperB>
        <ConversionPanel component={conversionPanelData} />
      </Main>
      <FooterComponent />
    </Layout>
  );
};

export default FeaturesPage;

export const Head = ({ location }) => (
  <SEO
    title="Choose Your Tools | UpKeep Features"
    description="UpKeep is a modern, intuitive, and mobile-first CMMS proven to streamline the work order process. Schedule preventative maintenance and tasks with ease. Try UpKeep free today."
    pathname={location?.pathname}
  />
);
