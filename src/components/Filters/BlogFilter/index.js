import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { fetchBlogCategories } from './utils/helpers';

import { Container, Header, List } from './styles/index.styled';

const BlogFilter = ({ data, activeCategory, setActiveCategory }) => {
  const { t } = useTranslation();
  const categories = fetchBlogCategories(data);

  return (
    <Container>
      <Header>
        <p className="heading">{t('Category')}</p>
      </Header>
      <List>
        {categories?.map(({ internalName, slug, postCount }) => (
          <li key={slug}>
            <button
              type="button"
              className={activeCategory === slug ? 'active' : ''}
              onClick={() => {
                if (activeCategory === slug) {
                  setActiveCategory('');
                  return;
                }
                setActiveCategory(slug);
              }}
            >
              {internalName}
              <span>({postCount})</span>
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default BlogFilter;
