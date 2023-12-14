import React, { useState, useRef } from 'react';
import shortid from 'shortid';
import GatsbyImage from '../../Image/GatsbyImage';
import Switcher from './components/Switcher';
import useParallaxEffect from '../../../hooks/useParallaxEffect';
import {
  Section,
  BackgroundImage,
  Wrapper,
  Content,
  Text,
  Image,
} from './styles/index.styled';

const SwitcherSlidebox = ({ component }) => {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(0);
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  if (!component) return null;
  const { headingKicker, heading, subhead, iconSlide } = component;
  const renderHeading = headingKicker || heading || subhead;
  const isActive = index => activeDropdownIndex === index;

  return (
    <Section theme={component?.theme}>
      <BackgroundImage
        ref={backgroundRef}
        theme={component?.theme}
        className="background-image"
        loading="eager"
      />
      <Wrapper>
        <Content>
          {renderHeading && (
            <Text theme={component?.theme}>
              {headingKicker && (
                <p className="heading-kicker">{headingKicker}</p>
              )}
              {heading && <h2 className="heading">{heading}</h2>}
              {subhead && <p className="subhead">{subhead}</p>}
            </Text>
          )}
          <Switcher
            listItems={iconSlide}
            activeDropdownIndex={activeDropdownIndex}
            setActiveDropdownIndex={setActiveDropdownIndex}
            isActive={isActive}
            theme={component?.theme}
          />
        </Content>
        {iconSlide.map(({ image }, index) => {
          if (isActive(index)) {
            return (
              <Image
                key={shortid.generate()}
                layoutId={`image-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <GatsbyImage
                  classes={isActive(index)}
                  src={image?.image?.gatsbyImageData}
                />
              </Image>
            );
          }
        })}
      </Wrapper>
    </Section>
  );
};

export default SwitcherSlidebox;
