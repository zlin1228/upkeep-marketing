import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Categories from './components/Categories';
import MobileCategories from './components/MobileCategories';
import IntegrationsCard from './components/IntegrationCard';
import SearchBar from './components/SearchBar';
import ViewMore from '../../../Pagination/ViewMore';

import useFilter from './utils/useFilter';

import {
  Section,
  Wrapper,
  Heading,
  Grid,
  Container,
} from './styles/index.styled';

const Integrations = ({ data }) => {
  const { t } = useTranslation();
  const {
    activeArray,
    activeCategory,
    setArrayByCategory,
    arrayToSlice,
    loopWithSlice,
    handleSearch,
    searchValue,
  } = useFilter(data, 8);
  const noIntegrationsFound = activeArray.length === 0;

  return (
    <Section id="integrations">
      <Heading className="heading">
        <h2>{t('Integration App Marketplace')}</h2>
        <p>{t('Check out our integrations below.')}</p>
        <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
      </Heading>
      <Wrapper>
        <Categories
          integrations={data}
          activeCategory={activeCategory}
          setIntegrationsByCategory={setArrayByCategory}
        />
        <Container className="integrations">
          {noIntegrationsFound ? (
            <h3>{t('No Integrations found matching search')}</h3>
          ) : (
            <>
              <div className="details">
                <h6>
                  {t('Viewing')} {activeCategory} {t('Integrations')}
                </h6>
                <p>
                  {t('Viewing')} 1-{activeArray.length} {t('of')}{' '}
                  {arrayToSlice.length}
                </p>
              </div>
              <MobileCategories
                integrations={data}
                activeCategory={activeCategory}
                setIntegrationsByCategory={setArrayByCategory}
              />
              <Grid className="integrations_grid">
                {activeArray.map(post => (
                  <IntegrationsCard key={post.id} integration={post} />
                ))}
              </Grid>
              <ViewMore
                loopWithSlice={loopWithSlice}
                countPerPage={8}
                arrayToSlice={arrayToSlice}
                activeArray={activeArray}
                contentType="Integrations"
              />
            </>
          )}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default Integrations;
