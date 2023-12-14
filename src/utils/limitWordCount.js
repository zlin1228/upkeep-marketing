/**
 * Truncate a string to a certain number of words.
 *
 * @param {string} inputString - The string to truncate.
 * @param {number} limit - The maximum number of words.
 * @param {boolean} parse - Whether to remove HTML tags or not.
 * @return {string} - The truncated string.
 */
const limitWordCount = (inputString, limit, parse = false) => {
  if (typeof inputString !== 'string') {
    throw new TypeError('Input should be a string');
  }

  let string = inputString;

  const removeHtmlTags = str => {
    return str.replace(/<[^>]*>/g, '');
  };

  if (parse) {
    string = removeHtmlTags(string);
  }

  const stringArray = string.split(' ');

  if (stringArray.length <= limit) {
    return stringArray.join(' ');
  }

  return `${stringArray.slice(0, limit).join(' ')}...`;
};

export default limitWordCount;
