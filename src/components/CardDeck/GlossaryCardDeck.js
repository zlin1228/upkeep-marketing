import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {
  Cards,
  Card,
  CallToAction,
  GlossaryLetter,
  Clickable,
} from '../../styles/Components/CardDeck/styles/GlossaryCardDeck';

const GlossaryCardDeck = ({ letter, posts }) =>
  posts.length !== 0 ? (
    <Container id={letter} className="mt-5">
      <Row className="justify-content-center">
        <GlossaryLetter className="mb-4">{letter}</GlossaryLetter>
      </Row>
      <Cards>
        {posts.map((post, index) => (
          <Card hoverable="true" key={'card' + index} md={6} lg={6} sm={12}>
            <h3>{post.node.glossaryTerm}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            <CallToAction
              className="standalone-link"
              to={`/maintenance-glossary/${post.node.slug}`}
            >
              Read Full Description
            </CallToAction>
            <Clickable to={`/maintenance-glossary/${post.node.slug}`} />
          </Card>
        ))}
      </Cards>
    </Container>
  ) : null;

export default GlossaryCardDeck;
