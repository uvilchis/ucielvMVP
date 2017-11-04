import React from 'react'

let Search = (props) => {
  let searchInput = ''
  return (
    <form onSubmit={props.handleSearch}>
      <input type="text" value={props.value} onChange={props.handleChange}/>
    </form>
  );
}

export default Search
