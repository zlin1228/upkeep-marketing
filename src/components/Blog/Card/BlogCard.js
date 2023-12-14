import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from '../../Image/GatsbyImage';
import CategoryTags from '../Categories/CategoryTags';
import Author from '../../Author/Author';
import FallbackImage from '../../Fallbacks/FallbackImage';
import { Card } from './styles/BlogCard';

const BlogCard = ({ post, index, showPublishDate }) => (
  <Card className={`card_${index + 1} blog-card`}>
    <Link to={`/blog/${post?.slug}`} className="clickable" />
    <div className="card_thumbnail">
      {post?.metaTags?.image?.url ? (
        <GatsbyImage
          src={post?.metaTags?.image?.url}
          alt={post?.internalName}
        />
      ) : (
        <FallbackImage />
      )}
    </div>
    <div className="card_body">
      <div className="card_content">
        <CategoryTags tags={post?.category} theme="blue" />
        <h2 className="title">{post?.internalName}</h2>
        <p className="description">
          {post?.metaTags?.description ||
            'Welcome to the UpKeep Blog, a place for those with new ideas in maintenance.'}
        </p>
      </div>
      <div>
        <div className="card_author">
          <Author author={post?.author} />
        </div>
        {showPublishDate && (
          <div className="card_date">
            <span className="date_heading">Publish Date: </span>
            {post?.meta?.publishedAt}
          </div>
        )}
      </div>
    </div>
  </Card>
);

export default BlogCard;
