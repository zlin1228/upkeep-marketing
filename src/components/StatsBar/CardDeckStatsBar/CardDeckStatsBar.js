import React from 'react';
import {
  Section,
  Header,
  HeadingKicker,
  Heading,
  Subhead,
  Wrapper,
  Card,
} from './CardDeckStatsBars.styled';

const CardDeckStatsBar = ({ component }) => {
  const { heading, headingKicker, subhead, statistic } = component;

  return (
    <Section>
      {(headingKicker || heading || subhead) && (
        <Header>
          {headingKicker && (
            <HeadingKicker>{component?.headingKicker}</HeadingKicker>
          )}
          {heading && <Heading>{component?.heading}</Heading>}
          {subhead && <Subhead dangerouslySetInnerHTML={{ __html: subhead }} />}
        </Header>
      )}
      <Wrapper statsLength={statistic?.length}>
        {component?.statistic?.map(stat => {
          return (
            <Card key={stat?.id}>
              <div
                className="heading"
                dangerouslySetInnerHTML={{ __html: stat?.heading }}
              />
              <div
                className="subhead"
                dangerouslySetInnerHTML={{ __html: stat?.subhead }}
              />
            </Card>
          );
        })}
      </Wrapper>
    </Section>
  );
};

export default CardDeckStatsBar;
