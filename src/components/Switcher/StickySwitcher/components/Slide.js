import React, { useEffect, useRef } from 'react';
import { StructuredText, renderRule } from 'react-datocms';
import { isParagraph, isList, isListItem } from 'datocms-structured-text-utils';

import Icon from '../../../../molecules/Icon';
import GatsbyImage from '../../../Image/GatsbyImage';
import CallToAction from '../../../CallToAction';

import useIntersection from '../../../../hooks/useIntersection';

import { color } from '../../../../atoms/colors';
import {
  Container,
  List,
  ListItem,
  Paragraph,
  Text,
} from '../styles/Slide.styled';

const Slide = ({
  id,
  idx,
  theme,
  heading,
  subheadText,
  callToAction,
  image,
  setActiveSlide,
}) => {
  const slideRef = useRef();
  const isVisible = useIntersection(slideRef, '-45%');

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (isVisible) {
        setActiveSlide(id);
      }
    });

    return () => {
      document.removeEventListener('scroll', () => {
        if (isVisible) {
          setActiveSlide(id);
        }
      });
    };
  }, [id, isVisible, setActiveSlide]);

  return (
    <Container id={id} idx={idx} ref={slideRef}>
      {image?.image?.gatsbyImageData && (
        <GatsbyImage
          src={image?.image?.gatsbyImageData}
          alt={image?.image?.alt}
        />
      )}
      <Text theme={theme}>
        {heading && <p className="heading">{heading}</p>}
        <div className="subhead">
          <StructuredText
            data={subheadText}
            customRules={
              subheadText?.value && [
                renderRule(isParagraph, ({ children, key }) => (
                  <Paragraph key={key} theme={theme}>
                    {children}
                  </Paragraph>
                )),
                renderRule(isList, ({ children, key }) => (
                  <List key={key}>{children}</List>
                )),
                renderRule(isListItem, ({ children, key }) => (
                  <ListItem key={key}>
                    <Icon
                      id="circle-check-01"
                      width="20px"
                      height="20px"
                      fillColor={color.steel[500]}
                    />
                    {children}
                  </ListItem>
                )),
              ]
            }
          />
        </div>
        <CallToAction
          variant="Link - Dark"
          nextIcon="fa-solid fa-chevron-right"
          {...callToAction}
        />
      </Text>
    </Container>
  );
};

export default Slide;
