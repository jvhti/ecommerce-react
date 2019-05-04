import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
  return (
        <div className="navbar__search">
          <div className="navbar__search__container">
            <input type="search" placeholder="Search for something..."/>
            <button><FontAwesomeIcon icon="search"/><span className="sr-only">Search</span></button>
          </div>
        </div>
  );
}

export default Search;
