import React from 'react';
import DownloadsFilter from '../../../../Filters/DownloadsFilter';
import MobileFilter from '../../../../Filters/DownloadsFilter/MobileFilter';
import SearchBar from '../../../../../molecules/Search/Search';
import { Container, Filters, Count } from '../styles/Header.styled';

const Header = ({
  downloads,
  filteredDownloads,
  activeIndex,
  downloadTypes,
  downloadTopics,
  activeType,
  setActiveType,
  activeTopic,
  setActiveTopic,
}) => (
  <Container>
    <Filters>
      <DownloadsFilter
        options={downloadTypes}
        setActiveOption={setActiveType}
      />
      <DownloadsFilter
        options={downloadTopics}
        setActiveOption={setActiveTopic}
      />
      <MobileFilter
        data={[
          {
            text: 'Type',
            options: downloadTypes,
            activeFilter: activeType,
            setActiveFilter: setActiveType,
          },
          {
            text: 'Topic',
            options: downloadTopics,
            activeFilter: activeTopic,
            setActiveFilter: setActiveTopic,
          },
        ]}
      />
    </Filters>
    <SearchBar data={downloads} prefix="/downloads" />
    <Count>
      Viewing <b>{activeIndex}</b> of <b>{filteredDownloads?.length}</b>{' '}
      downloads
    </Count>
  </Container>
);

export default Header;
