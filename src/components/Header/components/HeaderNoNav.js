import React from 'react';
import { Link } from 'gatsby';

import UpKeepLogo from './UpKeepLogo';

import { Header } from '../styles/HeaderNoNav.styled';

const HeaderNoNav = ({ theme }) => (
  <Header>
    <Link to="/">
      <UpKeepLogo theme={theme} />
    </Link>
  </Header>
);

export default HeaderNoNav;
