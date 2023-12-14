const getTableData = ref => {
  const headings = ref.current.querySelectorAll('h2');
  const tableData = [];
  headings.forEach(heading => {
    const anchor = heading.getAttribute('data-anchor');
    const tag = heading.getAttribute('data-tag');
    const label = heading.getAttribute('data-label');
    if (anchor !== null && tag !== null && label !== null) {
      const headingObj = { anchor, tag, label };
      tableData.push(headingObj);
    }
  });
  return tableData;
};

export default getTableData;
