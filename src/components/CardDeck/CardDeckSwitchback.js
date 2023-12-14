import React from 'react';
import CallToAction from '../CallToAction';
import Card from '../Cards/Card';
import {
  Section,
  Wrapper,
  Container,
  Column,
  Text,
} from './styles/CardDeckSwitchback.styled';

const sortCards = cards => {
  const numOfCards = cards.length;
  const half = Math.ceil(numOfCards / 2);
  const firstSet = cards.slice(0, half);
  const secondSet = cards.slice(half, numOfCards);
  return { firstSet, secondSet };
};

const CardDeckSwitchback = ({ component }) => {
  if (!component) return null;
  const {
    id,
    offsetCards,
    headingKicker,
    heading,
    subhead,
    primaryButton: { url, label },
    card,
  } = component;
  const { firstSet, secondSet } = sortCards(card);

  return (
    <Section id={id} offset={offsetCards ? 'true' : 'false'}>
      <Wrapper>
        <Container>
          <Column paddingBottom={offsetCards ? '125px' : '0px'}>
            {firstSet?.map(c => (
              <Card
                key={c?.id}
                card={{ ...c, truncateText: true, wordCount: 10 }}
              />
            ))}
          </Column>
          <Column paddingTop={offsetCards ? '125px' : '0px'}>
            {secondSet?.map(c => (
              <Card
                key={c?.id}
                card={{ ...c, truncateText: true, wordCount: 10 }}
              />
            ))}
          </Column>
        </Container>
        <Text>
          {headingKicker && <p className="heading-kicker">{headingKicker}</p>}
          {heading && <h2 className="heading">{heading}</h2>}
          {subhead && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: subhead }}
            />
          )}
          {url && (
            <CallToAction
              classes="cta"
              variant="Filled - Red"
              label={label}
              url={url}
              size="md"
            />
          )}
        </Text>
      </Wrapper>
    </Section>
  );
};

export default CardDeckSwitchback;
