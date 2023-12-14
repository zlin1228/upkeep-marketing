import React, { useState } from 'react';
import { useWindowSize } from 'react-use';

import BreadcrumbItem from './components/BreadcrumbItem';
import BreadcrumbDropdown from './components/BreadcrumbDropdown';
import BreadcrumbHome from './components/BreadcrumbHome';

import useBreadcrumbs from './hooks/useBreadcrumbs';

import { Container } from './styles/index.styled';

const HERO_THEME_MAP = {
  Light: 'dark',
  Dark: 'dark',
  Blue: 'light',
  Red: 'light',
  'Red-Light': 'dark',
  Grid: 'dark',
  'Grid-Dark': 'light',
  'Grid-DarkBlue': 'light',
};

const BREADCRUMB_THEMES = {
  light: 'light',
  dark: 'dark',
};

const Breadcrumbs = ({ theme, ...props }) => {
  const { width } = useWindowSize();
  const pageBreadcrumbs = useBreadcrumbs();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const breadcrumbs = props?.breadcrumbs || pageBreadcrumbs;
  const mappedTheme =
    HERO_THEME_MAP[theme] || BREADCRUMB_THEMES[theme] || 'dark';

  const firstTwo = breadcrumbs.slice(0, 2);
  let rest = breadcrumbs.slice(2, breadcrumbs.length - 1);
  let last = breadcrumbs[breadcrumbs.length - 1];

  if (last.title.length > 60) {
    rest = [...rest, last];
    last = null;
  }

  if (width < 576) {
    rest = breadcrumbs.slice(2, breadcrumbs.length);
    last = null;
  }

  return (
    <Container>
      {breadcrumbs.length > 3 ? (
        <>
          {firstTwo.map((breadcrumb, i) =>
            i === 0 ? (
              <BreadcrumbHome
                key={breadcrumb.pathname}
                breadcrumb={breadcrumb}
                theme={mappedTheme}
              />
            ) : (
              <BreadcrumbItem breadcrumb={breadcrumb} theme={mappedTheme} />
            )
          )}
          <BreadcrumbDropdown
            theme={mappedTheme}
            dropdownVisible={dropdownVisible}
            setDropdownVisible={setDropdownVisible}
            rest={rest}
            last={last}
            includesLast={last === null}
          />
          {last && (
            <BreadcrumbItem
              breadcrumb={last}
              theme={mappedTheme}
              className="disabled"
              isLast
            />
          )}
        </>
      ) : (
        breadcrumbs.length <= 3 && (
          <>
            {breadcrumbs.map((breadcrumb, i) =>
              i === 0 ? (
                <BreadcrumbHome
                  key={breadcrumb.pathname}
                  breadcrumb={breadcrumb}
                  theme={mappedTheme}
                />
              ) : (
                <BreadcrumbItem
                  breadcrumb={breadcrumb}
                  theme={mappedTheme}
                  className={i === breadcrumbs.length - 1 ? 'disabled' : ''}
                  isLast={i === breadcrumbs.length - 1}
                />
              )
            )}
          </>
        )
      )}
    </Container>
  );
};

export default Breadcrumbs;
