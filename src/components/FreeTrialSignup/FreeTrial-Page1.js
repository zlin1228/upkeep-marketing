import React from 'react';
import { Link } from 'gatsby';
import Hero from '../Hero/Hero';
import upkeepLogo from '../../assets/logo-header.svg';
import { setHeroData } from '../../data/TrialPage';
import { Main, Logo, Copyright } from '../../styles/Pages/FreeTrialPage';

const FreeTrialPage1 = ({ salesform }) => (
  <Main>
    <Logo className="upkeep-logo" src={upkeepLogo} />
    <Hero component={setHeroData({ salesform })} />
    <Copyright>
      <p>© 2021 UpKeep Maintenance Management</p>
      <Link to="/privacy">Privacy Policy</Link>
    </Copyright>
  </Main>
);

export default FreeTrialPage1;
