import React from 'react';
import SupportCenterCard from '../Cards/SupportCenterCard';
import {
  Section,
  Wrapper,
  Heading,
  Grid,
  SupportLink,
} from '../../styles/Components/CardDeck/SupportCenterCardDeck';

const SupportCenterCardDeck = ({ component, theme }) => (
  <Section>
    <Wrapper>
      <Heading>
        {component?.headingIcon}
        <h2>{component?.heading}</h2>
      </Heading>
      <Grid>
        {component?.cards?.map(card => (
          <SupportCenterCard key={card.title} card={card} theme={theme} />
        ))}
        {component?.links?.map(link => (
          <SupportLink key={link?.label} href={link?.url}>
            <div dangerouslySetInnerHTML={{ __html: link?.label }} />
          </SupportLink>
        ))}
      </Grid>
    </Wrapper>
  </Section>
);

export default SupportCenterCardDeck;
