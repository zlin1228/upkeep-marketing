import React from 'react';

import Icon from '../../../molecules/Icon';
import CallToAction from '../../CallToAction';

import { exploreLinksData } from '../data';

import {
  Container,
  Row,
  Column,
  Heading,
  List,
  ListItem,
} from '../styles/ExploreLinks.styled';

const ExploreLinks = () => (
  <Container>
    {exploreLinksData.map(({ id, items }) => (
      <Row key={id}>
        {items.map(({ id: columnId, icon, iconColor, links, name }) => (
          <Column key={columnId}>
            <Heading className="heading">
              <Icon
                id={icon}
                fillColor={iconColor}
                width="24px"
                height="24px"
              />
              {name}
            </Heading>
            <List>
              {links.map(({ id: linkId, name: linkName, url }) => (
                <ListItem key={linkId}>
                  <CallToAction
                    label={linkName}
                    url={url}
                    variant="Link - Steel"
                    nextIcon="fa-solid fa-chevron-right"
                  />
                </ListItem>
              ))}
            </List>
          </Column>
        ))}
      </Row>
    ))}
  </Container>
);

export default ExploreLinks;
