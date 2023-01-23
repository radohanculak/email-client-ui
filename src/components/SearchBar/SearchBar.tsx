import React from 'react';

export const SearchBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <form role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
