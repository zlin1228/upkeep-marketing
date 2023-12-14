import React from 'react';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import usePartnershipsData from '../ListingGenerator/utils/usePartnershipsData';
import Search from '../../molecules/Search/Search';
import {
  Section,
  Wrapper,
  Container,
  Text,
  SearchBar,
} from './styles/HeroPartnershipsListing.styled';

const HeroPartnershipsListing = ({ component }) => {
  const { partnerships } = usePartnershipsData();

  return (
    <Section id="heroComponent">
      <Wrapper>
        <Breadcrumbs theme="Red" />
        <Container>
          <Text>
            {component?.heading && (
              <h1 className="heading">{component.heading}</h1>
            )}
            {component?.subhead && (
              <div
                className="subhead"
                dangerouslySetInnerHTML={{ __html: component.subhead }}
              />
            )}
          </Text>
          <SearchBar>
            <Search
              data={partnerships}
              placeholder="Search for Partners"
              prefix="/partnerships"
              size="lg"
            />
          </SearchBar>
        </Container>
      </Wrapper>
    </Section>
  );
};

export default HeroPartnershipsListing;
