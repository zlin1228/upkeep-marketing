const formatEdgesToNodes = data => {
  return data.map(item => ({
    node: {
      ...item,
    },
  }));
};

export default formatEdgesToNodes;
