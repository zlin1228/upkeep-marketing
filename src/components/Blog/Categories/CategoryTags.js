import React from 'react';
import {
  Wrapper,
  Scroll,
  GradientOverlay,
  FeaturedTag,
  Tag,
  setOverflowHidden,
  setOverflowScroll,
} from './styles/CategoryTags';

const CategoryTags = ({ tags, featured, theme, scroll }) =>
  tags ? (
    <Wrapper className="tags_wrapper">
      <GradientOverlay theme={theme} />
      <Scroll
        onMouseOver={e => setOverflowScroll(e)}
        onMouseLeave={e => setOverflowHidden(e)}
        className={scroll ? 'scroll' : ''}
      >
        {featured && (
          <FeaturedTag color="yellow" className="tag">
            Featured Post
          </FeaturedTag>
        )}
        <Tag to={`/blog/${tags?.slug}`} color={tags?.color} className="tag">
          {tags?.internalName || 'UpKeep Article'}
        </Tag>
      </Scroll>
    </Wrapper>
  ) : null;

export default CategoryTags;
