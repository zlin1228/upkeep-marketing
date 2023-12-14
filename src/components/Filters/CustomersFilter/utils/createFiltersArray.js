import fetchIndustries from './fetchIndustries';

const createFiltersArray = (
  data,
  t,
  activeIndustry,
  setActiveIndustry,
  activeFilter,
  setActiveFilter
) => [
  {
    text: t('Industry'),
    options: fetchIndustries(data),
    filters: activeIndustry,
    setter: setActiveIndustry,
  },
  {
    text: t('Sort by'),
    options: [
      t('Sort by Newest'),
      t('Sort by Oldest'),
      t('Alphabetically A-Z'),
      t('Alphabetically Z-A'),
    ],
    filters: activeFilter,
    setter: setActiveFilter,
  },
];

export default createFiltersArray;
