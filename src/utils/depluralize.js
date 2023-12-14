const depluralize = word => {
  if (word.endsWith('ies') && word.length > 3) {
    return `${word.slice(0, -3)}y`;
  }
  if (word.endsWith('es') && word.length > 2) {
    const irregularWords = ['buses', 'wishes', 'foxes'];
    if (irregularWords.includes(word)) {
      return word.slice(0, -2);
    }
    return word.slice(0, -1);
  }
  if (word.endsWith('s') && word.length > 1) {
    return word.slice(0, -1);
  }
  return word;
};

export default depluralize;
