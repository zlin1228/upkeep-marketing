import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import CallToAction from '../../CallToAction';
import GatsbyImage from '../../Image/GatsbyImage';
import Author from '../../Author/Author';

import limitWordCount from '../../../utils/limitWordCount';

import { Container, Image, Content, Text, Footer } from './styles/index.styled';

const BlogCard = ({ component }) => {
  const { t } = useTranslation();
  if (!component) return null;
  const {
    internalName,
    meta: { publishedAt },
    metaTags: { title, description, image },
    slug,
    author,
    category,
  } = component;

  return (
    <Container>
      <CallToAction variant="Clickable" url={`/blog/${slug}`} />
      {image?.gatsbyImageData && (
        <Image>
          <GatsbyImage src={image?.gatsbyImageData} alt={internalName} />
        </Image>
      )}
      <Content>
        <Text>
          {category?.internalName && (
            <p className="heading-kicker">{category?.internalName}</p>
          )}
          {internalName || title ? (
            <p className="heading">{internalName || title}</p>
          ) : null}
          {description && (
            <p className="subhead">{limitWordCount(description, 30, true)}</p>
          )}
        </Text>
        <Footer>
          {author && <Author author={author} />}
          {publishedAt && (
            <p className="publish-date">
              <b>{t('Publish Date')}: </b>
              {publishedAt}
            </p>
          )}
        </Footer>
      </Content>
    </Container>
  );
};

export default BlogCard;
