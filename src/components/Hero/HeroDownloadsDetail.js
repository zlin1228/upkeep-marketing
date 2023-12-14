import React from 'react';

import Breadcrumbs from '../../molecules/Breadcrumbs';
import GatsbyImage from '../Image/GatsbyImage';
import SocialShare from '../../molecules/SocialShare';
import DownloadDetailForm from '../Forms/DownloadTemplateForm';

import {
  Section,
  OuterWrapper,
  InnerWrapper,
  Text,
  Content,
} from './styles/HeroDownloadsDetail.styled';

const HeroDownloadsDetail = ({ component, location }) => {
  if (!component) return null;
  const {
    internalName,
    title,
    description,
    thumbnailImage,
    gatedContent,
    formHandler,
    download,
  } = component;

  return (
    <Section>
      <OuterWrapper>
        <Breadcrumbs theme="Red-Light" />
        <InnerWrapper gatedContent={gatedContent}>
          <Text>
            <p className="heading-kicker">Downloads</p>
            {title && <h1 className="heading">{title}</h1>}
            {description && <p className="subhead">{description}</p>}
          </Text>
          <Content>
            {gatedContent ? (
              <DownloadDetailForm
                component={{
                  internalName,
                  pardotFormHandler: formHandler,
                  download: download?.url,
                }}
                location={location}
              />
            ) : (
              <GatsbyImage
                src={thumbnailImage?.gatsbyImageData}
                alt={thumbnailImage?.alt}
              />
            )}
            <SocialShare heading="Share this article:" />
          </Content>
        </InnerWrapper>
      </OuterWrapper>
    </Section>
  );
};

export default HeroDownloadsDetail;
