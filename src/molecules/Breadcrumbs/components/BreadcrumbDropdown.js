import React from 'react';

import { ChevronIcon } from './BreadcrumbIcons';

import {
  Breadcrumb,
  BreadcrumbButton,
  BreadcrumbLink,
  Dropdown,
} from '../styles/index.styled';

const BreadcrumbDropdown = ({
  theme,
  dropdownVisible,
  setDropdownVisible,
  rest,
  last,
  includesLast,
}) => (
  <Breadcrumb onMouseLeave={() => setDropdownVisible(false)}>
    <BreadcrumbButton
      type="button"
      onClick={() => setDropdownVisible(true)}
      onMouseOver={() => setDropdownVisible(true)}
      theme={theme}
    >
      ...
    </BreadcrumbButton>
    {dropdownVisible && (
      <Dropdown onMouseLeave={() => setDropdownVisible(false)} theme={theme}>
        {rest.map((breadcrumb, index) => {
          const isLast = index === rest.length - 1;

          return (
            <BreadcrumbLink
              key={breadcrumb.pathname}
              to={breadcrumb.pathname}
              theme={theme}
              className={isLast && includesLast ? 'disabled' : ''}
            >
              {breadcrumb.title}
            </BreadcrumbLink>
          );
        })}
      </Dropdown>
    )}
    {last !== null && <ChevronIcon theme={theme} />}
  </Breadcrumb>
);

export default BreadcrumbDropdown;
