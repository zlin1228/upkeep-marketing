import React from 'react';
import shortid from 'shortid';

import getAnnouncementBar from './getAnnouncementBar';
import calculateHeaderTheme from '../components/Header/utils/calculateHeaderTheme';

import Accordion from '../components/Accordion';
import BenefitsTable from '../components/BenefitsTable/BenefitsTable';
import Callout from '../components/Callout/Callout';
import CardDeckGenerator from '../components/CardDeck';
import CareersTable from '../components/Careers/CareersTable';
import CaseStudy from '../components/CaseStudy';
import ConversionPanel from '../components/ConversionPanel';
import DownloadApp from '../components/DownloadApp/DownloadApp';
import EdgeConversionPanel from '../components/ConversionPanel/variants/EdgeConversionPanel';
import EdgeHero from '../components/Hero/EdgeHero';
import EdgeIllustration from '../components/EdgeIllustration';
import EdgeSupportCardDeck from '../components/CardDeck/SupportCardDeck';
import FAQGrid from '../components/Grid/FAQGrid';
import FeaturedNews from '../components/FeaturedNewsComponent/FeaturedNews';
import FeaturesPanel from '../components/FeaturesPanel/FeaturesPanel';
import FullWidthBanner from '../components/Banner/FullWidthBanner';
import FooterComponent from '../components/Footer';
import Grid from '../components/Grid';
import HeaderComponent from '../components/Header';
import Hero from '../components/Hero';
import Hopscotch from '../components/Hopscotch/Hopscotch';
import IconGrid from '../components/Grid/IconGrid';
import IntegrationsPanel from '../components/IntegrationsPanel';
import LearningCenterCardDeck from '../components/LearningCenterCardDeck';
import ListingGenerator from '../components/ListingGenerator';
import OffsetGrid from '../components/OffsetGrid/OffsetGrid';
import OffsetSwitcher from '../components/OffsetSwitcher.js/OffsetSwitcher';
import PricingComponent from '../components/PricingComponent';
import PillarEmbed from '../components/PillarEmbed';
import PartnersForm from '../components/Forms/PartnersForm';
import ProductTable from '../components/ProductTable/ProductTable';
import ReviewBar from '../components/ReviewBar/ReviewBar';
import RichTextBlock from '../components/RichTextBlock';
import Slidebox from '../components/Slidebox/Slidebox';
import SliderComponent from '../components/Slider/Slider';
import SocialProof from '../components/SocialProof';
import StatsBar from '../components/StatsBar';
import StructuredTextBlock from '../components/StructuredTextBlock/StructuredTextBlock';
import Switcher from '../components/Switcher';
import TeamMembers from '../components/TeamMembers';
import TestimonialGenerator from '../components/TestimonialComponent';
import TestimonialSlider from '../components/TestimonialSlider';
import TrustBar from '../components/TrustBar';
import VerticalSlider from '../components/VerticalSlider';
import VideoTestimonial from '../components/VideoTestimonial/VideoTestimonial';
import VideoTestimonialSlider from '../components/TestimonialSlider/VideoTestimonialSlider';

export default ({
  slug,
  location,
  components,
  postTypes,
  pageMeta,
  showAnnouncementBar,
  setShowAnnouncementBar,
}) => {
  if (!components || components?.length === 0) return null;

  const announcementBar = getAnnouncementBar(components);

  const nofooter = components.filter(
    item => item?.internal?.type !== 'DatoCmsFooterComponent'
  );
  const footer = components.filter(
    item => item?.internal?.type === 'DatoCmsFooterComponent'
  );

  const isHeroComponent =
    components.filter(item => item?.internal?.type === 'DatoCmsHeroComponent')
      .length === 0;

  const sortedComponents = [...nofooter, footer[0]];

  return (
    <>
      {sortedComponents?.map((component, i) => {
        const prevComponent = sortedComponents[i - 1];
        const nextComponent = sortedComponents[i + 1];

        switch (component?.internal?.type) {
          case 'DatoCmsAccordionComponent':
            return (
              <Accordion
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsBenefitsTableComponent':
            return (
              <BenefitsTable
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsCalloutComponent':
            return (
              <Callout
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsCardDeckComponent':
            return (
              <CardDeckGenerator
                key={shortid.generate()}
                slug={slug}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsCareersTable':
            return (
              <CareersTable component={component} key={shortid.generate()} />
            );
          case 'DatoCmsCaseStudyComponent':
            return (
              <CaseStudy
                key={shortid.generate()}
                location={location}
                showImage={component?.showImage !== null && true}
                component={component}
              />
            );
          case 'DatoCmsConversionPanelComponent':
            return (
              <ConversionPanel
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsComponentDownloadApp':
            return (
              <DownloadApp component={component} key={shortid.generate()} />
            );
          case 'DatoCmsEdgeConversionPanel':
            return (
              <EdgeConversionPanel
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsEdgeHero':
            return (
              <EdgeHero
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsComponentEdgeIllustration':
            return (
              <EdgeIllustration
                key={shortid.generate()}
                component={component}
              />
            );
          case 'DatoCmsEdgeSupportCardDeck':
            return (
              <EdgeSupportCardDeck
                key={shortid.generate()}
                theme={component?.theme}
                location={location}
                data={component}
              />
            );
          case 'DatoCmsFaqComponent':
            return (
              <FAQGrid
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsFeaturedNewsComponent':
            return (
              <FeaturedNews
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsFeaturesPanel':
            return (
              <FeaturesPanel
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsFullWidthBanner':
            return (
              <FullWidthBanner
                key={shortid.generate()}
                slug={slug}
                location={location}
                isHeroComponent={isHeroComponent}
                showAnnouncementBar={showAnnouncementBar}
                component={component}
              />
            );
          case 'DatoCmsFooterComponent':
            return (
              <FooterComponent
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsGridComponent':
            return <Grid component={component} key={shortid.generate()} />;
          case 'DatoCmsHeader':
            return (
              <HeaderComponent
                key={shortid.generate()}
                theme={calculateHeaderTheme(components)}
                component={component}
                announcementBar={announcementBar}
                showAnnouncementBar={showAnnouncementBar}
                setShowAnnouncementBar={setShowAnnouncementBar}
              />
            );
          case 'DatoCmsHeroComponent':
            return (
              <Hero
                key={shortid.generate()}
                pageMeta={pageMeta}
                location={location}
                showAnnouncementBar={showAnnouncementBar}
                component={component}
              />
            );
          case 'DatoCmsHopscotchComponent':
            return <Hopscotch component={component} key={shortid.generate()} />;
          case 'DatoCmsIconGridComponent':
            return (
              <IconGrid
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsIntegrationPanelComponent':
            return (
              <IntegrationsPanel
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsComponentLearningCenterCardDeck':
            return (
              <LearningCenterCardDeck
                key={shortid.generate()}
                component={component}
              />
            );
          case 'DatoCmsListingComponent':
            return (
              <ListingGenerator
                key={shortid.generate()}
                location={location}
                component={component}
                postTypes={postTypes}
                showAnnouncementBar={showAnnouncementBar}
              />
            );
          case 'DatoCmsComponentOffsetGrid':
            return (
              <OffsetGrid component={component} key={shortid.generate()} />
            );
          case 'DatoCmsOffsetSwitcherComponent':
            return (
              <OffsetSwitcher
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsPricingComponent':
            return (
              <PricingComponent
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsPillarEmbedComponent':
            return (
              <PillarEmbed
                key={shortid.generate()}
                pageMeta={pageMeta}
                location={location}
                slug={slug}
                component={component}
              />
            );
          case 'DatoCmsPartnersForm':
            return (
              <PartnersForm
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsProductTableComponent':
            return (
              <ProductTable
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsReviewBarComponent':
            return (
              <ReviewBar
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsRichTextComponent':
            return (
              <RichTextBlock
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsSlideboxComponent':
            return <Slidebox component={component} key={shortid.generate()} />;
          case 'DatoCmsSlider':
            return (
              <SliderComponent component={component} key={shortid.generate()} />
            );
          case 'DatoCmsSocialProofComponent':
            return (
              <SocialProof
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsStatsBarComponent':
            return (
              <StatsBar
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsStructuredTextComponent':
            return (
              <StructuredTextBlock
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsSwitcherComponent':
            return (
              <Switcher
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsTeamMembersComponent':
            return (
              <TeamMembers
                key={shortid.generate()}
                location={location}
                nextComponent={nextComponent}
                prevComponent={prevComponent}
                component={component}
              />
            );
          case 'DatoCmsTestimonialCarousel':
            return (
              <TestimonialGenerator
                key={shortid.generate()}
                pageMeta={pageMeta}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsTestimonialSlider':
            return (
              <TestimonialSlider
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsTrustBarComponent':
            return (
              <TrustBar
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsVerticalSliderComponent':
            return (
              <VerticalSlider
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsVideoTestimonialsComponent':
            return (
              <VideoTestimonial
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          case 'DatoCmsVideoTestimonialSlider':
            return (
              <VideoTestimonialSlider
                key={shortid.generate()}
                location={location}
                component={component}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};
