import React, { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import Header from './components/Header';
import Grid from './components/Grid';
import { useDownloadsData } from '../../utils/useDownloadsData';
import {
  getDownloadCategories,
  getDownloadTypes,
  filterPosts,
} from './utils/helpers';
import { Section, Wrapper } from './styles/index.styled';

const Downloads = () => {
  const { allDatoCmsDownload } = useDownloadsData();
  const { width } = useWindowSize();
  const [activeType, setActiveType] = useState('Type');
  const [activeCategory, setActiveCategory] = useState('Topic');
  const [sliceIndex, setSliceIndex] = useState(12);
  const [activeIndex, setActiveIndex] = useState(12);
  const downloadTypes = getDownloadTypes(allDatoCmsDownload?.edges);
  const downloadCategories = getDownloadCategories(allDatoCmsDownload?.edges);
  const filteredPosts = filterPosts(
    allDatoCmsDownload?.edges,
    activeType,
    activeCategory
  );

  useEffect(() => {
    if (width < 992) setSliceIndex(8);
  }, [width]);

  useEffect(() => {
    const downloadCards = document.querySelectorAll('.download-card');
    setActiveIndex(downloadCards.length);
  }, [filteredPosts]);

  return (
    <Section>
      <Wrapper>
        <Header
          downloads={allDatoCmsDownload?.edges}
          filteredDownloads={filteredPosts}
          activeIndex={activeIndex}
          downloadTypes={downloadTypes}
          downloadTopics={downloadCategories}
          activeType={activeType}
          setActiveType={setActiveType}
          activeTopic={activeCategory}
          setActiveTopic={setActiveCategory}
        />
        <Grid
          downloads={filteredPosts}
          sliceIndex={sliceIndex}
          setSliceIndex={setSliceIndex}
        />
      </Wrapper>
    </Section>
  );
};

export default Downloads;
