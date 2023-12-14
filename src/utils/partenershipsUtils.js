export const formatPostNodes = data => {
  const results = data.map(({ node }) => ({
    category: node?.category?.internalName
      ? node?.category?.internalName
      : 'Other',
    catSlug: node?.category?.slug ? node?.category?.slug : 'other',
    catId: node?.category?.originalId,
    slug: node?.slug,
    title: node?.internalName,
    logofluid: node?.company?.logo?.image?.gatsbyImageData,
    logourl: node?.company?.logo?.image?.url,
    showflag: true,
  }));
  return results.sort((a, b) => {
    if (a.catId > b.catId) return -1;
    return 1;
  });
};
export const formatCategoryNodes = (partnerships, categories) => {
  categories.forEach((cat, i) => {
    const catPosts = partnerships.filter(
      post => post.catSlug === cat?.node?.slug
    );
    categories[i] = { ...cat, catPosts };
  });
  return categories;
};
export const handleSearch = (
  e,
  partnerships,
  setSearch,
  setSelectedCategory,
  setFilteredPartnerships
) => {
  const searchTerm = e.target.value.trim().toLowerCase();
  setSearch(searchTerm);
  setSelectedCategory('');
  const filtered = partnerships.map(partnership => {
    if (
      partnership?.title
        ?.trim?.()
        .toLowerCase?.()
        .includes?.(searchTerm.trim().toLowerCase())
    ) {
      partnership.showflag = true;
    } else {
      partnership.showflag = false;
    }
    return partnership;
  });
  setFilteredPartnerships(filtered);
};
export const handleCategorySelect = (
  partnerships,
  catid,
  setSelectedCategory,
  setFilteredPartnerships
) => {
  setSelectedCategory(catid);
  const filtered = partnerships.map(partnership => {
    if (partnership.catId === catid || partnership.catSlug === catid) {
      partnership.showflag = true;
    } else {
      partnership.showflag = false;
    }
    return partnership;
  });
  setFilteredPartnerships(filtered);
};
export const clearFiltered = (
  partnerships,
  setSelectedCategory,
  setFilteredPartnerships
) => {
  setSelectedCategory('');
  setFilteredPartnerships(partnerships);
};
