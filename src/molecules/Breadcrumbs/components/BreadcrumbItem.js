import React from 'react';

import { ChevronIcon } from './BreadcrumbIcons';
import { Breadcrumb, BreadcrumbLink } from '../styles/index.styled';

const BreadcrumbItem = ({ breadcrumb, theme, isLast, ...props }) => (
  <Breadcrumb key={breadcrumb.pathname}>
    <BreadcrumbLink
      to={breadcrumb.pathname}
      theme={theme}
      isLast={isLast}
      {...props}
    >
      {breadcrumb.title}
    </BreadcrumbLink>
    {!isLast && <ChevronIcon theme={theme} />}
  </Breadcrumb>
);

export default BreadcrumbItem;
