import React from 'react';
import { Link } from 'gatsby';
import limitWordCount from '../../../utils/limitWordCount';
import Container from '../styles/PageLinks.styled';

const PageLinks = ({ component }) => (
  <Container>
    {component?.prev && (
      <Link className="prev" to={`/podcasts/${component?.prev?.slug}`}>
        <span>
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88904 1.10431L1.99995 4.9934L5.88904 8.88248"
              stroke="#0D141A"
              stroke-width="2"
            />
          </svg>
          Previous
        </span>
        <p className="mobile-title">
          {limitWordCount(component?.prev?.heading, 5)}
        </p>
        <p className="desktop-title">{component?.prev?.heading}</p>
      </Link>
    )}
    {component?.next && (
      <Link className="next" to={`/podcasts/${component?.next?.slug}`}>
        <span>
          Next
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.11093 1.10431L5.00002 4.9934L1.11093 8.88248"
              stroke="#0D141A"
              stroke-width="2"
            />
          </svg>
        </span>
        <p className="mobile-title">
          {limitWordCount(component?.next?.heading, 5)}
        </p>
        <p className="desktop-title">{component?.next?.heading}</p>
      </Link>
    )}
  </Container>
);

export default PageLinks;
