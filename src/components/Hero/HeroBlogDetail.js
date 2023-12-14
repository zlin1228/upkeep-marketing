import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import SocialShare from '../../molecules/SocialShare';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import GatsbyImage from '../Image/GatsbyImage';
import InfoBar from '../InfoBar/InfoBar';

import {
  Section,
  OuterWrapper,
  InnerWrapper,
  Details,
  Text,
  Content,
} from './styles/HeroBlogDetail.styled';

const HeroBlogDetail = ({ component }) => {
  const { t } = useTranslation();

  if (!component) return null;
  const {
    internalName,
    metaTags,
    author,
    publishDate,
    readingTime,
  } = component;

  return (
    <Section>
      <OuterWrapper>
        <Breadcrumbs theme="Red-Light" />
        <InnerWrapper>
          <Details>
            <Text>
              <p className="heading-kicker">{t('Blog Post')}</p>
              {metaTags?.title || internalName ? (
                <h1 className="heading">{metaTags.title || internalName}</h1>
              ) : null}
              {metaTags?.description && (
                <p className="subhead">{metaTags?.description}</p>
              )}
            </Text>
            <InfoBar
              readTime={readingTime}
              author={`${author?.firstName} ${author?.lastName}`}
              publishDate={publishDate}
            />
          </Details>
          <Content>
            <GatsbyImage
              src={metaTags?.image?.gatsbyImageData || metaTags?.image?.url}
              alt={metaTags?.image?.alt}
            />
            <SocialShare heading={`${t('Share this article')}:`} />
          </Content>
        </InnerWrapper>
      </OuterWrapper>
    </Section>
  );
};

export default HeroBlogDetail;
