import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import EventsFilter from '../../../../Filters/EventsFilter';
import MobileFilter from '../../../../Filters/EventsFilter/MobileFilter';
import SearchBar from '../../../../../molecules/Search/Search';
import { Container, Filters } from '../styles/Header.styled';

const Header = ({
  events,
  eventTypes,
  eventCategories,
  activeType,
  setActiveType,
  activeCategory,
  setActiveCategory,
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Filters>
        <EventsFilter options={eventTypes} setActiveOption={setActiveType} />
        <EventsFilter
          options={eventCategories}
          setActiveOption={setActiveCategory}
        />
        <MobileFilter
          data={[
            {
              text: t('Type'),
              options: eventTypes,
              activeFilter: activeType,
              setActiveFilter: setActiveType,
            },
            {
              text: t('Category'),
              options: eventCategories,
              activeFilter: activeCategory,
              setActiveFilter: setActiveCategory,
            },
          ]}
        />
      </Filters>
      <SearchBar
        data={events.map(node => ({
          node: {
            ...node,
          },
        }))}
        prefix="/events"
      />
    </Container>
  );
};

export default Header;
