import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import CallToAction from '../../../../CallToAction';

import {
  Body,
  Button,
  ColorBar,
  Container,
  Description,
  Features,
  Price,
  Title,
  Eyebrow,
  Wrapper,
} from '../styles/PricingCard.styled';

const PricingCard = ({ card }) => {
  const { t } = useTranslation();

  if (!card) return null;
  const {
    id,
    theme,
    price,
    mostPopular,
    eyebrow,
    name,
    description,
    features,
    callToAction,
  } = card;

  return (
    <Container id={id} mostPopular={mostPopular}>
      <ColorBar mostPopular={mostPopular} theme={theme || 'red-500'}>
        {mostPopular && <p>Most Popular ✨</p>}
      </ColorBar>
      <Wrapper>
        <Body>
          {(name || eyebrow) && (
            <Title>{name && <p className="name">{name}</p>}</Title>
          )}
          {description && (
            <Description
              className="description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          {eyebrow && (
            <Eyebrow
              className="eyebrow"
              dangerouslySetInnerHTML={{ __html: eyebrow }}
            />
          )}
          {price && (
            <Price>
              <p className="cost">${price.replace('$', '')}</p>
              <p className="duration">{t('/month per user')}</p>
            </Price>
          )}
          {features && (
            <Features
              className="features"
              dangerouslySetInnerHTML={{ __html: features }}
            />
          )}
        </Body>
        {callToAction?.url && (
          <Button theme={theme || 'white'} popular={mostPopular}>
            <CallToAction
              {...callToAction}
              variant={mostPopular ? 'Filled - Steel' : 'Outline - Steel'}
              size="md"
            />
            <p className="disclaimer">{t('No Credit Card Required.')}</p>
          </Button>
        )}
      </Wrapper>
    </Container>
  );
};

export default PricingCard;
