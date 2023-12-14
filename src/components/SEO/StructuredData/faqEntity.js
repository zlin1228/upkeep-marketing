const FAQEntity = dataArray => {
  const mainEntity = dataArray.map(item => {
    const data = {
      '@type': 'Question',
      name: item.heading,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item?.subhead,
      },
    };
    return data;
  });
  return mainEntity;
};
export default FAQEntity;
