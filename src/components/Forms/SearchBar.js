import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  IconHolder,
  SearchHolder,
  SearchPosition
} from '../../styles/Components/Form/SearchBar';

import ReactSearchBox from 'react-search-box'
import {navigate} from 'gatsby';

const SearchBar = (props) => {

  return (
    <div>
      <SearchHolder>
        <SearchPosition>
          <IconHolder>
            <FaSearch />
          </IconHolder>
          <ReactSearchBox
            placeholder={props.placeholder}
            data={props.hits}
            onSelect={record => navigate(record.slug)}
            fuseConfigs={{
              threshold: 0.9,
            }}
          />
        </SearchPosition>
      </SearchHolder>
    </div>
  );
};

export default SearchBar;
