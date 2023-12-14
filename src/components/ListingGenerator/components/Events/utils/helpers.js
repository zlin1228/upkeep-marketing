export const getEventTypes = (events, translate) => {
  if (!events) {
    return [];
  }

  const eventTypes = events.map(node => node?.eventType?.internalName);

  const uniqueEventTypes = [...new Set(eventTypes)];

  uniqueEventTypes.unshift(translate('Type'));

  return uniqueEventTypes;
};

export const getEventCategories = (events, translate) => {
  if (!events) {
    return [];
  }

  const eventCategories = events.map(node => node?.category?.internalName);

  const uniqueEventCategories = [...new Set(eventCategories)];

  uniqueEventCategories.unshift(translate('Category'));

  return uniqueEventCategories;
};

export const filterPosts = (posts, type, category) => {
  const postsDuplicate = [...posts];

  if (
    (type === 'Type' && category === 'Category') ||
    (type === 'Tipo' && category === 'Categoría')
  ) {
    return posts;
  }

  if ((type === 'Type' || type === 'Tipo') && category !== 'Category') {
    return postsDuplicate.filter(
      node => node.category.internalName === category
    );
  }

  if (
    type !== 'Type' &&
    (category === 'Category' || category === 'Categoría')
  ) {
    return postsDuplicate.filter(node => node.eventType.internalName === type);
  }

  if (type !== 'Type' && category !== 'Category') {
    return postsDuplicate.filter(
      node =>
        node.eventType.internalName === type &&
        node.category.internalName === category
    );
  }
};
