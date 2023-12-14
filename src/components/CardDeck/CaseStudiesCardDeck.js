import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  Section,
  Wrapper,
  Heading,
  Grid,
  Card,
  CallToAction,
} from '../../styles/Components/CardDeck/CaseStudiesCardDeck';

export default () => {
  const {
    caseStudiess: { edges },
  } = useStaticQuery(caseStudiesQuery);
  return (
    <Section>
      <Wrapper>
        <Heading>
          <h2>Real people, real stories, real success.</h2>
          <Link to="/customers">View all Case Studies</Link>
        </Heading>
        <Grid>
          {edges.map(({ node }) => (
            <Card>
              <Link className="clickable" to={`/customers/${node?.slug}`} />
              <div className="thumbnail">
                <img
                  src={node?.metaTags?.image?.url}
                  alt={node?.metaTags.title}
                />
              </div>
              <div className="body">
                <h5>{node?.metaTags.title}</h5>
                <p>{node?.metaTags.description}</p>
              </div>
              <CallToAction
                className="animated-link"
                to={`/customers/${node?.slug}`}
              >
                Learn more
              </CallToAction>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
};

export const caseStudiesQuery = graphql`
  query CaseStudiesCardDeckQuery {
    caseStudiess: allDatoCmsCustomerSuccessStory(
      filter: { industry: { name: { eq: "IoT Hardware" } } }
      limit: 3
      sort: { publishDate: DESC }
    ) {
      edges {
        node {
          id
          slug
          industry {
            id
            name
          }
          excerpt
          metaTags {
            title
            description
            image {
              url
            }
          }
        }
      }
    }
  }
`;
