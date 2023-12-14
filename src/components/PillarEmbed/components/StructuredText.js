import React, { useRef, useEffect } from 'react';
import { StructuredText, renderRule } from 'react-datocms';
import { isHeading } from 'datocms-structured-text-utils';
import { render as toPlainText } from 'datocms-structured-text-to-plain-text';
import GatsbyImage from '../../Image/GatsbyImage';
import CardDeckGenerator from '../../CardDeck';
import ConversionBox from '../../ConversionBox';
import LiteYoutube from '../../Lite-Youtube/LiteYoutube';
import { getYoutubeId } from '../../../utils/getYoutubeId';
import getTableData from '../utils/getTableData';
import {
  Container,
  Asset,
  CardDeckWrapper,
  ConversionWrapper,
} from '../styles/StructuredText';

const StructuredTextComponent = ({ component, setTableData }) => {
  const contentRef = useRef();
  useEffect(() => setTableData(getTableData(contentRef)), [contentRef]);

  if (!component?.value) return null;
  return (
    <Container ref={contentRef} className="track-progress">
      <StructuredText
        data={component}
        customRules={
          component?.value && [
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
            case 'DatoCmsCardDeckComponent':
              return (
                <CardDeckWrapper>
                  <CardDeckGenerator key={key} component={record} />
                </CardDeckWrapper>
              );
            case 'DatoCmsConversionBox':
              return (
                <ConversionWrapper>
                  <ConversionBox
                    key={key}
                    component={record}
                    theme={record?.theme}
                  />
                </ConversionWrapper>
              );
            default:
              return null;
          }
        }}
      />
    </Container>
  );
};

export default StructuredTextComponent;
