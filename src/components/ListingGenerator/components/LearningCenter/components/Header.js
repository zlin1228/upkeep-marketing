import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import FilterIcon from '../assets/filter-icon.svg';
import { Container, Button, Paragraph } from '../styles/Header.styled';

const Header = ({ currentPosts, totalPosts, setMobileFilterActive }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Button onClick={() => setMobileFilterActive(true)}>
        {t('Filter')}
        <img src={FilterIcon} alt="Filter Icon" />
      </Button>
      <Paragraph>
        {t('Showing')} {currentPosts} {t('of')} {totalPosts}
      </Paragraph>
    </Container>
  );
};

export default Header;
