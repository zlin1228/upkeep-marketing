import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby';

import GatsbyImage from '../Image/GatsbyImage';

import { Container, Heading, List, ListItem } from './styles/RecommendedEvents';

const RecommendedEvents = ({ events }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading>{t('Recommended Events')}</Heading>
      <List>
        {events.map(node => (
          <ListItem key={node.id}>
            <Link
              to={`/events/${node?.slug}`}
              aria-label={`Event: ${node?.title}`}
              className="list-item-link"
            >
              <div className="thumbnail">
                <GatsbyImage
                  src={
                    node?.thumbnailImage?.image?.gatsbyImageData ||
                    'https://www.datocms-assets.com/38028/1618858419-upkeep-fallback.png'
                  }
                  alt={node?.title}
                />
              </div>
              <p className="heading">{node?.title}</p>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default RecommendedEvents;
