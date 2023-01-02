import React from 'react';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";       
import './searchbar.scss'

const SearchBar = () => {
  return (

        <div className="search">
          <input type="text" placeholder="Search for anything" />
          <span>
            <SearchOutlinedIcon className="icon" />{" "}
          </span>
        </div>
  )
}

export default SearchBar