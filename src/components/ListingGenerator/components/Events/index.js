import React, { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Header from './components/Header';
import Grid from './components/Grid';
import {
  getEventCategories,
  getEventTypes,
  filterPosts,
} from './utils/helpers';
import { Section, Wrapper } from './styles/index.styled';

const Events = ({ data: events }) => {
  const { t } = useTranslation();
  const { width } = useWindowSize();

  const [activeType, setActiveType] = useState(t('Type'));
  const [activeCategory, setActiveCategory] = useState(t('Category'));
  const [sliceIndex, setSliceIndex] = useState(12);

  const eventTypes = getEventTypes(events, t);
  const eventCategories = getEventCategories(events, t);
  const filteredPosts = filterPosts(events, activeType, activeCategory);

  useEffect(() => {
    if (width < 992) setSliceIndex(8);
  }, [width]);

  return (
    <Section>
      <Wrapper>
        <Header
          events={events}
          eventTypes={eventTypes}
          eventCategories={eventCategories}
          activeType={activeType}
          setActiveType={setActiveType}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Grid
          events={filteredPosts}
          sliceIndex={sliceIndex}
          setSliceIndex={setSliceIndex}
        />
      </Wrapper>
    </Section>
  );
};

export default Events;
