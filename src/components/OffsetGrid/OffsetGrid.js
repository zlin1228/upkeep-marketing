import React from 'react';
import {
  Section,
  Wrapper,
  Header,
  Heading,
  Kicker,
  Subhead,
  Grid,
} from './styles/OffsetGrid.styled';
import GridItem from './components/GridItem';

const OffsetGrid = ({ component }) => (
  <Section background={component?.backgroundColor}>
    <Wrapper>
      <Header>
        {component?.headingKicker && (
          <Kicker>{component?.headingKicker}</Kicker>
        )}
        {component?.heading && <Heading>{component?.heading}</Heading>}
        {component?.subhead && (
          <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
        )}
      </Header>
      <Grid>
        {component?.gridItems.map(item => (
          <GridItem key={item?.id} component={item} />
        ))}
      </Grid>
    </Wrapper>
  </Section>
);

export default OffsetGrid;
