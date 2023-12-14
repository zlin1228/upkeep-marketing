import React from 'react';
import { navigate } from 'gatsby';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import {
  Section,
  Wrapper,
  Row,
  Column,
  Badge,
} from './styles/LearningDetailHero.styled';

const LearningDetailHero = ({ component }) => (
  <Section>
    <Wrapper>
      <Breadcrumbs theme="light" />
      <Column>
        <h1>{component?.internalName}</h1>
        <Row>
          {component?.categories?.map(c => {
            const queryParam = c?.safeName
              ?.replace('&', 'and')
              .split(' ')
              .join('-');
            return (
              <Badge
                onClick={() => navigate(`/learning?category=${queryParam}`)}
                key={c?.id}
              >
                {c?.name}
              </Badge>
            );
          })}
        </Row>
      </Column>
    </Wrapper>
  </Section>
);

export default LearningDetailHero;
