const useTableOfContents = ref => {
  const h2s = ref.querySelectorAll('h2');
  const tableData = [];

  h2s.forEach(h2 => {
    const anchor = h2.innerText.toLowerCase().replace(/ /g, '-');
    h2.setAttribute('id', anchor);
    tableData.push({
      label: h2.innerText,
      anchor: h2.id,
    });
  });

  return tableData;
};

export default useTableOfContents;
