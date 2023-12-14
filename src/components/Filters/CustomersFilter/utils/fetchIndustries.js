const fetchIndustries = array => {
  const allIndustries = array
    ?.map(node => node?.industry?.name)
    .filter(Boolean);

  const uniqueIndustries = [...new Set(allIndustries)];

  if (uniqueIndustries.length > 0) {
    uniqueIndustries.sort((a, b) => a.localeCompare(b));
  }

  return uniqueIndustries;
};

export default fetchIndustries;
