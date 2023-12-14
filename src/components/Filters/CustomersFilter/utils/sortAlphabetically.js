export default (array, filter) => {
  const sortedArray = [...array].sort((item1, item2) => {
    const name1 = item1?.internalName?.split(' ')[0] || '';
    const name2 = item2?.internalName?.split(' ')[0] || '';
    return name1.localeCompare(name2);
  });

  return filter === 'Z-A' ? sortedArray.reverse() : sortedArray;
};
