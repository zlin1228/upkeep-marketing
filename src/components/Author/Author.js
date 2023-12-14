import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import AuthorStyles from './styles/AuthorStyles';

const Author = ({ author }) => {
  if (!author) return null;

  return (
    <AuthorStyles className="author">
      <div className="author_headshot">
        {author?.headshot?.image?.gatsbyImageData && (
          <GatsbyImage
            src={author?.headshot?.image?.gatsbyImageData}
            alt={`${author?.firstName} ${author?.lastName}`}
          />
        )}
      </div>
      <div className="author_details h-100">
        <div className="author_name">
          {`${author?.firstName} ${author?.lastName}`}
        </div>
        <div className="author_role">{author?.role}</div>
      </div>
    </AuthorStyles>
  );
};

export default Author;
