import { useLocation } from '@reach/router';

export const useUrlParams = () => {
  const location = useLocation();

  const getParams = () => {
    const searchParams = new URLSearchParams(location.search);
    return Object.fromEntries(searchParams.entries());
  };

  const setParams = params => {
    const searchParams = new URLSearchParams(params);
    window.history.pushState(
      {},
      '',
      `${location.pathname}?${searchParams.toString()}`
    );
  };

  return {
    getParams,
    setParams,
  };
};
