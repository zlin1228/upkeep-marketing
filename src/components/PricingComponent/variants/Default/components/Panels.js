import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import CallToAction from '../../../../CallToAction';

import {
  Container,
  Wrapper,
  Item,
  ItemWrapper,
  Text,
} from '../styles/Panels.styled';
import { ColorBar } from '../styles/PricingCard.styled';

const calculateFlexValues = length => {
  let totalItems = length + 1;
  let spacerPercentage = (1 / totalItems) * 100;
  let wrapperPercentage = 100 - spacerPercentage;

  return {
    spacerFlex: `0 0 ${spacerPercentage}%`,
    wrapperFlex: `0 0 ${wrapperPercentage}%`,
  };
};

const Panels = ({ data, scrolled }) => {
  const { t } = useTranslation();
  const { spacerFlex, wrapperFlex } = calculateFlexValues(data?.length);

  return (
    <Container spacerFlex={spacerFlex}>
      <div className="spacer" />
      <Wrapper
        numOfItems={data?.length}
        wrapperFlex={wrapperFlex}
        className={scrolled ? 'scrolled' : ''}
      >
        {data?.map(node => {
          const { id, mostPopular, price, name, callToAction, theme } = node;
          return (
            <Item
              key={id}
              theme={theme}
              mostPopular={mostPopular}
              className={scrolled ? 'scrolled' : ''}
            >
              <ColorBar theme={theme || 'red-500'} />
              <ItemWrapper>
                <Text mostPopular={mostPopular}>
                  <p className="heading">{name}</p>
                  <div className="price">
                    {price ? (
                      <>
                        <span className="amount">
                          ${price?.replace('$', '')}
                        </span>
                        <span className="duration">{t('/month per user')}</span>
                      </>
                    ) : (
                      t('Custom Pricing')
                    )}
                  </div>
                </Text>
                {callToAction?.url && (
                  <CallToAction
                    {...callToAction}
                    variant="Link - Steel"
                    icon="fa-solid fa-chevron-right"
                  />
                )}
              </ItemWrapper>
            </Item>
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default Panels;
