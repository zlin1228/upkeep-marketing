import React from 'react';
import { Link } from 'gatsby';
import UpKeepIcon from '../../../assets/upkeep_icon_gray.svg';
import { Container } from '../styles/FooterBottom.styled';

const FooterBottom = () => (
  <Container>
    <div className="bottom-wrapper">
      <div className="bottom-left">
        <img src={UpKeepIcon} alt="UpKeep icon" loading="lazy" />
        <p className="copyright">
          © {new Date().getFullYear()}, UpKeep Technologies, Inc.
        </p>
      </div>
      <div className="bottom-right">
        <button type="button" id="ot-sdk-btn" className="ot-sdk-show-settings">
          Cookie Settings
        </button>
        <Link to="/sitemap-0.xml">Sitemap</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Use</Link>
      </div>
    </div>
  </Container>
);

export default FooterBottom;
