import React, { useState } from 'react';
import PartnershipsFilter from '../../../Filters/PartnershipsFilter';
import PartnershipsMobileFilter from '../../../Filters/PartnershipsFilter/MobileFilter';
import PartnershipsCard from '../../../Cards/PartnershipsCard';
import usePartnershipsData from '../../utils/usePartnershipsData';
import usePaginateButton from '../../../Pagination/utils/usePaginateButton';
import { handleFilter } from './utils/helpers';
import {
  Section,
  Wrapper,
  Sidebar,
  Container,
  Grid,
} from './styles/index.styled';

const PartnershipsListing = () => {
  const { partnerships: data } = usePartnershipsData();
  const partnerships = data.map(item => item.node);
  const [activeCategories, setActiveCategories] = useState([]);
  const posts = handleFilter(partnerships, activeCategories);
  const { text, sliceIndex, PaginateButton } = usePaginateButton(
    posts,
    '.partnerships-card',
    21,
    9,
    activeCategories
  );

  return (
    <Section>
      <Wrapper>
        <Sidebar>
          {text && (
            <div
              className="count-text"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
          <PartnershipsFilter
            data={partnerships}
            activeCategories={activeCategories}
            setActiveCategories={setActiveCategories}
          />
          <PartnershipsMobileFilter
            data={partnerships}
            activeCategories={activeCategories}
            setActiveCategories={setActiveCategories}
          />
        </Sidebar>
        <Container>
          <Grid>
            {posts.slice(0, sliceIndex).map(item => (
              <PartnershipsCard key={item?.id} {...item} />
            ))}
          </Grid>
          {PaginateButton}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default PartnershipsListing;
