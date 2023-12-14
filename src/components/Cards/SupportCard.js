import React from 'react';
import { Link } from 'gatsby';
import SupportCard from '../../styles/Components/Cards/SupportCard';

export default ({ card, theme }) => (
  <SupportCard theme={theme}>
    <Link className="clickable" to={card?.callToAction?.url || '/'} />
    <h4>{card?.heading}</h4>
    <div dangerouslySetInnerHTML={{ __html: card?.subhead }} />
    {card?.callToAction && (
      <Link className="card_cta" to={card?.callToAction?.url || '/'}>
        {card?.callToAction?.label}
      </Link>
    )}
  </SupportCard>
);
