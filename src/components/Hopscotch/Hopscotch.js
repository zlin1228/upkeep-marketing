import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import {
  Section,
  Wrapper,
  HeaderWrapper,
  Heading,
  Subhead,
  Grid,
  Card,
} from './styles/Hopscotch.styled';

const Hopscotch = ({ component }) => (
  <Section>
    <Wrapper>
      <HeaderWrapper>
        {component?.heading && <Heading>{component?.heading}</Heading>}
        {component?.subhead && (
          <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
        )}
      </HeaderWrapper>
      <Grid>
        {component?.hopscotchItems.map(item => (
          <Card className="hopscotch-card" key={item?.id}>
            <GatsbyImage
              src={item?.image?.gatsbyImageData}
              alt={item?.image?.alt || item?.image?.internalName}
            />
          </Card>
        ))}
      </Grid>
    </Wrapper>
  </Section>
);

export default Hopscotch;
