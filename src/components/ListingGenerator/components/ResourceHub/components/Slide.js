import React, { useState } from 'react';
import GatsbyImage from '../../../../Image/GatsbyImage';
import Author from '../../../../Author/Author';
import CallToAction from '../../../../CallToAction';
import ChevronDown from '../assets/ChevronDown';
import {
  Container,
  Frame,
  Clickable,
  Image,
  Body,
  Text,
  Tags,
  Tag,
  Button,
} from '../styles/Slide.styled';

const Slide = ({ component }) => {
  const [xMousePosition, setXMousePosition] = useState(null);
  const [yMousePosition, setYMousePosition] = useState(null);

  const handleClick = e => {
    e.stopPropagation();
    if (xMousePosition !== e.clientX || yMousePosition !== e.clientY) {
      e.preventDefault();
    }
  };

  const handleMouseDown = e => {
    setXMousePosition(e.clientX);
    setYMousePosition(e.clientY);
    e.preventDefault();
  };

  return (
    <Container>
      <Frame>
        <Clickable
          to={component?.slug}
          aria-label={component?.heading}
          onMouseDown={e => handleMouseDown(e)}
          onClick={e => handleClick(e)}
        />
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
                dangerouslySetInnerHTML={{ __html: component?.subhead }}
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
    </Container>
  );
};

export default Slide;
