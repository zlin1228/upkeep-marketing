import React from 'react';

import CallToAction from '../../../../CallToAction';
import Icon from '../../../../../molecules/Icon';

import { Card, CardBody, Container, Text } from '../styles/Header.styled';

const Header = ({ headingKicker, heading, subhead, card }) => (
  <Container>
    <Text>
      {headingKicker && <p className="eyebrow">{headingKicker}</p>}
      {heading && <p className="heading">{heading}</p>}
      {subhead && (
        <div
          className="subhead"
          dangerouslySetInnerHTML={{ __html: subhead }}
        />
      )}
    </Text>
    {card && (
      <Card>
        <CardBody>
          {(card?.heading || card?.icon) && (
            <div className="header">
              {card?.heading && <p className="heading">{card.heading}</p>}
              {card?.icon && <Icon id={card.icon} width="24px" height="24px" />}
            </div>
          )}
          {card?.subhead && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: card.subhead }}
            />
          )}
        </CardBody>
        <CallToAction
          variant="Link - Dark"
          nextIcon="fa-solid fa-chevron-right"
          {...card.callToAction}
        />
      </Card>
    )}
  </Container>
);

export default Header;
