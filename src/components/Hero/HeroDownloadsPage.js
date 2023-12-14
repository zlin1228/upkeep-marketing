import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import CallToAction from '../CallToAction';
import {
  HeroContainer,
  BreadcrumbsWrapper,
  HeroWrapper,
  DetailsWrapper,
  HeadingKicker,
  Heading,
  Subhead,
  ImageWrapper,
} from './styles/HeroDownloadsPage.styled';

const HeroDownloadsPage = ({ component, showAnnouncementBar }) => {
  return (
    <HeroContainer showAnnouncementBar={showAnnouncementBar}>
      <BreadcrumbsWrapper>
        <Breadcrumbs theme="Light" />
      </BreadcrumbsWrapper>
      <HeroWrapper>
        <DetailsWrapper>
          <HeadingKicker>{component?.headingKicker}</HeadingKicker>
          <Heading>{component?.heading}</Heading>
          <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
          <CallToAction
            url={component?.callToAction?.url}
            label={component?.callToAction?.label}
            icon="fa-solid fa-chevron-right"
            variant="Red-Arrow-Link"
          />
        </DetailsWrapper>
        <ImageWrapper>
          <GatsbyImage
            src={component?.featuredImage?.image?.gatsbyImageData}
            alt={component?.featuredImage?.image?.alt}
          />
        </ImageWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroDownloadsPage;
