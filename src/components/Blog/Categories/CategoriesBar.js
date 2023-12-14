import React from 'react';
import { Tags, Tag } from './styles/CategoriesBar';

const CategoriesBar = ({ categories }) => (
  <Tags>
    {categories?.map(({ node }) => (
      <Tag color={node?.color} key={node?.id} to={`/blog/${node?.slug}`}>
        {node?.internalName}
      </Tag>
    ))}
  </Tags>
);

export default CategoriesBar;
