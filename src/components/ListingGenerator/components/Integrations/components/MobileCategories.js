import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Icon from '../../../../../molecules/Icon';
import { Container, Dropdown, IconContainer } from '../styles/MobileCategories';
import fetchCategories from '../utils/fetchCategories';

const MobileCategories = ({ integrations, setIntegrationsByCategory }) => {
  const { t } = useTranslation();
  const categories = fetchCategories(integrations);

  return (
    <Container>
      <IconContainer>
        <Icon id="fa-solid fa-sort" width="12px" height="12px" />
      </IconContainer>
      <Dropdown
        name="categories"
        id="categories"
        onChange={e => setIntegrationsByCategory(e.target.value)}
      >
        <option value="All">{t('Categories')}</option>
        {categories.map(cat => (
          <option
            value={cat?.internalName}
            event={cat?.internalName}
            key={cat?.id}
          >
            {cat?.internalName}
          </option>
        ))}
      </Dropdown>
    </Container>
  );
};

export default MobileCategories;
