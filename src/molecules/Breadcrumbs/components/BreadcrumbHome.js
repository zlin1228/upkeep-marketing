import React from 'react';

import { ChevronIcon, HomeIcon } from './BreadcrumbIcons';

import { Breadcrumb, HomeLink } from '../styles/index.styled';

const BreadcrumbHome = ({ theme, breadcrumb }) => (
  <Breadcrumb>
    <HomeLink to={breadcrumb.pathname || '/'} theme={theme}>
      <HomeIcon theme={theme} />
    </HomeLink>
    <ChevronIcon theme={theme} />
  </Breadcrumb>
);
export default BreadcrumbHome;
