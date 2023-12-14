import { useState, useEffect } from 'react';

const useFilter = (array, countPerPage) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeArray, setActiveArray] = useState([]);
  const [arrayToSlice, setArrayToSlice] = useState(array);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = e => {
    setActiveCategory('All');
    setSearchValue(e.target.value);
    const searchInput = e.target.value.toLowerCase().split(' ').join('');
    const searchResults = array.filter(post => {
      const integrationTitle = post?.internalName
        ?.toLowerCase()
        ?.split(' ')
        ?.join('');
      if (integrationTitle.includes(searchInput)) return post;
    });
    setActiveArray(searchResults);
  };

  const setArrayByCategory = category => {
    setSearchValue('');
    setActiveCategory(category);
    if (category === 'All') setArrayToSlice(array);
    else {
      setArrayToSlice(
        array.filter(item => item?.category?.internalName === category)
      );
    }
  };

  let tempArray = [];
  const loopWithSlice = (start, end, array) => {
    const slicedPosts = array?.slice(start, end);
    tempArray = [...tempArray, ...slicedPosts];
    setActiveArray(tempArray);
  };

  useEffect(() => {
    loopWithSlice(0, countPerPage, arrayToSlice);
  }, [arrayToSlice]);

  return {
    activeCategory,
    activeArray,
    setArrayByCategory,
    arrayToSlice,
    loopWithSlice,
    handleSearch,
    searchValue,
  };
};

export default useFilter;
