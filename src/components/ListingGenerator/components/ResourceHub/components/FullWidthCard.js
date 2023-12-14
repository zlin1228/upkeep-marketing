import React from 'react';
import GatsbyImage from '../../../../Image/GatsbyImage';
import Author from '../../../../Author/Author';
import CallToAction from '../../../../CallToAction';
import limitWordCount from '../../../../../utils/limitWordCount';
import ChevronDown from '../assets/ChevronDown';
import {
  Frame,
  Clickable,
  Image,
  Body,
  Text,
  Tags,
  Tag,
  Button,
} from '../styles/FullWidthCard.styled';

const FullWidthCard = ({ component }) => (
  <Frame
    type={component?.type}
    layout={component?.layout}
    index={component?.index}
  >
    <Clickable to={component?.slug} aria-label={component?.heading} />
    {component?.image && (
      <Image>
        <GatsbyImage src={component?.image} alt={component?.heading} />
      </Image>
    )}
    <Body type={component?.type}>
      <Text>
        <Tags>
          {component?.tags?.map((tag, index) => (
            <Tag key={tag} index={index}>
              {tag}
            </Tag>
          ))}
        </Tags>
        {component?.heading && <h3>{component?.heading}</h3>}
        {component?.subhead && (
          <div
            className="subhead"
            dangerouslySetInnerHTML={{
              __html: limitWordCount(component?.subhead, 30),
            }}
          />
        )}
      </Text>
      <Author author={component?.author} />
      <CallToAction url={component?.callToAction?.url} styles={Button}>
        {component?.callToAction?.label}
        <ChevronDown />
      </CallToAction>
    </Body>
  </Frame>
);

export default FullWidthCard;
