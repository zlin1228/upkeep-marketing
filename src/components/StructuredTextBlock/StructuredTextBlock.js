import React from 'react';
import { StructuredText, renderRule } from 'react-datocms';
import { isHeading } from 'datocms-structured-text-utils';
import { render as toPlainText } from 'datocms-structured-text-to-plain-text';
import GatsbyImage from '../Image/GatsbyImage';
import CallToAction from '../CallToAction';
import LiteYoutube from '../Lite-Youtube/LiteYoutube';
import ContentSquareLink from '../ContentSquare/ContentSquareLink/ContentSquareLink';
import { getYoutubeId } from '../../utils/getYoutubeId';
import { Container, Asset } from './styles/StructuredTextBlock.styled';

const StructuredTextBlock = ({ component }) => (
  <Container>
    <StructuredText
      data={component?.structuredText}
      customRules={
        component?.structuredText?.value && [
          renderRule(isHeading, ({ node, children, key }) => {
            const HeadingTag = `h${node.level}`;
            const anchor = toPlainText(node)
              .toLowerCase()
              .replace(/ /g, '-')
              .replace(/[^\w-]+/g, '');
            const label =
              typeof children[0] === 'object'
                ? children[0]?.props?.children[0]
                : children[0];
            return (
              <HeadingTag
                id={anchor}
                key={key}
                data-anchor={anchor}
                data-tag={HeadingTag}
                data-label={label}
              >
                {children}
              </HeadingTag>
            );
          }),
        ]
      }
      renderInlineRecord={({ record, key }) => {
        switch (record.internal?.type) {
          case 'DatoCmsWebsiteImage':
            return (
              <Asset key={key}>
                <GatsbyImage
                  src={record?.image?.gatsbyImageData}
                  alt={record?.alt}
                />
              </Asset>
            );
          case 'DatoCmsWebsiteVideo':
            return (
              <Asset key={key}>
                <LiteYoutube videoId={getYoutubeId(record?.youtubeUrl)} />
              </Asset>
            );
          case 'DatoCmsCallToAction':
            return (
              <CallToAction
                key={key}
                url={record.url}
                label={record.label}
                styles="text-decoration: none;"
              />
            );
          case 'DatoCmsContentSquareOptOut':
            return <ContentSquareLink key={key} label={record.label} />;
          default:
            return null;
        }
      }}
    />
  </Container>
);

export default StructuredTextBlock;
