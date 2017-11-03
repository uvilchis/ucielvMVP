import React from 'react'

let Search = () => {
  let searchInput = ''
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text"/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
}

export default Search
