import React from 'react';
import socialLinks from './data/socialLinks';
import SocialLinks from './styles/SocialLinks';

export default ({ styles, heading }) => (
  <SocialLinks style={styles} className="social-links-container">
    <h4>{heading || 'Connect with us'}</h4>
    <div className="social-links">
      {socialLinks?.map(link => {
        return (
          <a href={link.Url} key={link.Url} className="social-link">
            {link.Icon}
          </a>
        );
      })}
    </div>
  </SocialLinks>
);
