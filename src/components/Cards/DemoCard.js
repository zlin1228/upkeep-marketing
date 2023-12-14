import React from 'react';
import { Link } from 'gatsby';
import UpKeepIcon from '../../assets/UpKeep_icon.svg';
import { Frame } from '../../styles/Components/Cards/DemoCard';

const DemoCard = ({ theme }) => (
  <Frame theme={theme} className="demo_card">
    <div className="cta_header">
      <img src={UpKeepIcon} alt="UpKeep Icon" /> UpKeep makes maintenance easy.
    </div>
    <p className="cta_description">
      Maintenance shouldn’t mean guesswork and paperwork. UpKeep makes it simple
      to see where everything stands, all in one place. That means less
      guesswork and more time to focus on what matters.
    </p>
    <Link to="/demo" className="cta_button">
      Get a free product tour
    </Link>
  </Frame>
);

export default DemoCard;
