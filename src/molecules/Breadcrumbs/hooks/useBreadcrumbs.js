import { useMemo } from 'react';
import { useLocation } from '@reach/router';

const useBreadcrumbs = () => {
  const location = useLocation();
  const breadcrumb = useMemo(() => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    let pathAcc = '';

    const isSpanishLocale = pathParts[0] === 'es';

    const crumbs = pathParts
      .map((part, i) => {
        pathAcc += `/${part}`;

        if (i === 0 && isSpanishLocale) return null;

        const title = part
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return {
          title,
          pathname: pathAcc,
        };
      })
      .filter(Boolean);

    return [
      {
        title: 'Home',
        pathname: isSpanishLocale ? '/es' : '/',
      },
      ...crumbs,
    ];
  }, [location]);

  return breadcrumb;
};

export default useBreadcrumbs;
