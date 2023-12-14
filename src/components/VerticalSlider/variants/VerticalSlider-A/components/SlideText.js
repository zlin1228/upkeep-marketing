import React from 'react';
import { StructuredText, renderRule } from 'react-datocms';
import { isParagraph, isList, isListItem } from 'datocms-structured-text-utils';

import StatCard from './StatCard';
import TestimonialCard from './TestimonialCard';
import CallToAction from '../../../../CallToAction';
import CircleCheck from '../assets/circle-check.svg';

import { Text, Paragraph, List, ListItem } from '../styles/SlideText.styled';

const SlideText = ({ headingKicker, heading, subhead, button }) => (
  <Text>
    {headingKicker && <p className="eyebrow">{headingKicker}</p>}
    {heading && (
      <div className="heading" dangerouslySetInnerHTML={{ __html: heading }} />
    )}
    {subhead && (
      <div className="subhead">
        <StructuredText
          data={subhead}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case 'DatoCmsStat':
                return <StatCard key={record?.id} {...record} />;
              default:
                return null;
            }
          }}
          renderInlineRecord={({ record }) => {
            switch (record.__typename) {
              case 'DatoCmsTestimonial':
                return <TestimonialCard key={record?.id} {...record} />;
              default:
                return null;
            }
          }}
          customRules={
            subhead?.value && [
              renderRule(isParagraph, ({ children, key }) => {
                return <Paragraph key={key}>{children}</Paragraph>;
              }),
              renderRule(isList, ({ children, key }) => {
                return <List key={key}>{children}</List>;
              }),
              renderRule(isListItem, ({ children, key }) => {
                return (
                  <ListItem key={key}>
                    <img src={CircleCheck} alt="Check Icon" />
                    {children}
                  </ListItem>
                );
              }),
            ]
          }
        />
      </div>
    )}
    {button?.url && (
      <CallToAction
        variant="Outline Dark - Transparent"
        size="md"
        {...button}
      />
    )}
  </Text>
);

export default SlideText;
