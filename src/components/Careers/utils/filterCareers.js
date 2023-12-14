export default careers => {
  const categories = careers.map(career => career?.categories?.team);
  const uniqueCategories = [...new Set(categories)];
  const careerOps = uniqueCategories.map(category => {
    return {
      category,
      positions: careers.filter(c => c.categories.team === category),
    };
  });
  return careerOps;
};
