import React from 'react';
import { Link } from 'react-scroll';
import Author from '../Author/Author';
import CategoryTags from '../Blog/Categories/CategoryTags';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import FeaturedContent from './components/FeaturedContent';
import {
  HeroContainer,
  BreadcrumbsWrapper,
  Heading,
  HeroWrapper,
  HeadingKicker,
  Info,
  Subhead,
  CallToAction,
  DemoButton,
} from './styles/HeroSwitchback';

const HeroSwitchback = ({ content, reverse, theme, resource }) => {
  const themeCapitalized =
    theme && theme.charAt(0).toUpperCase() + theme.slice(1);

  return (
    <HeroContainer className="hero_container" theme={theme}>
      <BreadcrumbsWrapper>
        <Breadcrumbs theme={themeCapitalized} resource={resource} />
      </BreadcrumbsWrapper>
      <HeroWrapper theme={themeCapitalized}>
        {content?.featuredContent && (
          <FeaturedContent
            reverse={reverse}
            featuredContent={content?.featuredContent}
          />
        )}
        <Info
          lg={content?.featuredContent ? 5 : 12}
          className="item-center"
          reverse={reverse}
          center={!content?.featuredContent}
        >
          <CategoryTags
            tags={content?.categoryTags}
            featured
            theme="light"
            scroll
          />
          {content?.headingKicker && (
            <HeadingKicker theme={theme}>
              {content?.headingKicker}
            </HeadingKicker>
          )}
          {content?.heading && (
            <Heading theme={theme}>{content?.heading}</Heading>
          )}
          {content?.subhead && (
            <Subhead theme={theme}>{content?.subhead}</Subhead>
          )}
          <div className="cta_wrapper">
            {content?.demoButton && (
              <DemoButton
                theme={theme}
                className="demoButton"
                to={content?.demoButton?.url}
              >
                {content?.demoButton?.label}
              </DemoButton>
            )}
            {content?.callToAction && (
              <CallToAction
                theme={theme}
                className="callToAction"
                to={content?.callToAction?.url}
              >
                {content?.callToAction?.label}
              </CallToAction>
            )}
            {content?.scrollLink && (
              <Link
                className={`scrollLink-${content?.scrollLink?.type}`}
                to={content?.scrollLink?.location}
                duration={content?.scrollLink?.duration}
                offset={content?.scrollLink?.offset}
                spy
                smooth
                exact="true"
              >
                {content?.scrollLink?.label}
              </Link>
            )}
          </div>
          <Author author={content?.author} />
        </Info>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSwitchback;
