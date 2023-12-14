import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import GatsbyImage from '../Image/GatsbyImage';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import Author from '../Author/Author';
import CallToAction from '../CallToAction';
import {
  Section,
  OuterWrapper,
  InnerWrapper,
  Image,
  Content,
  Text,
} from './styles/HeroBlogPage.styled';

const HeroBlogPage = ({
  component: { featuredBlogPost },
  showAnnouncementBar,
}) => {
  const { t } = useTranslation();

  if (!featuredBlogPost) return null;
  const {
    internalName,
    metaTags: { title, description, image },
    slug,
    category,
    author,
  } = featuredBlogPost;

  return (
    <Section showAnnouncementBar={showAnnouncementBar}>
      <OuterWrapper>
        <Breadcrumbs theme="Red-Light" />
        <InnerWrapper>
          <CallToAction url={`/blog/${slug}`} variant="Clickable" />
          <Image>
            <GatsbyImage src={image?.gatsbyImageData} alt={image?.alt} />
          </Image>
          <Content>
            <Text>
              <p className="heading-kicker">
                <span>{t('Featured Post')}</span>
                {category?.internalName && <span>{category.internalName}</span>}
              </p>
              {internalName || title ? (
                <h1 className="heading">{internalName || title}</h1>
              ) : null}
              {description && <p className="subhead">{description}</p>}
            </Text>
            <Author author={author} />
          </Content>
        </InnerWrapper>
      </OuterWrapper>
    </Section>
  );
};

export default HeroBlogPage;
