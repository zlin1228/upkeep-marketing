export const setDataByIndex = (index, data) => {
  if (index === 0) return data[0];
  if (index === 1) return data[1];
};

export const setLeftColumnData = (data, orientation, breakpoint, layout) => {
  if (!data) return;

  if (breakpoint === 'desktop' && layout === 'row') {
    return data;
  }

  if (breakpoint === 'desktop') {
    if (orientation === 'left') {
      return data
        .map((item, index) => (index <= 1 ? item : null))
        .filter(item => item !== null);
    }
    if (orientation === 'right') {
      return data
        .map((item, index) => (index <= 2 ? item : null))
        .filter(item => item !== null);
    }
  }
  if (breakpoint === 'tablet') {
    return data;
  }
  if (breakpoint === 'mobile') {
    return [];
  }
};

export const setRightColumnData = (data, orientation, breakpoint) => {
  if (!data) return;
  if (breakpoint === 'desktop') {
    if (orientation === 'left') {
      return data
        .map((item, index) => (index > 1 ? item : null))
        .filter(item => item !== null);
    }
    if (orientation === 'right') {
      return data
        .map((item, index) => (index > 2 ? item : null))
        .filter(item => item !== null);
    }
  }
  if (breakpoint === 'tablet') {
    return [];
  }
  if (breakpoint === 'mobile') {
    return data;
  }
};
