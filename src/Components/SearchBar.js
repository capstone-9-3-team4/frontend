import React, { useState } from 'react';
import { 
    FcSearch
    
  } from "react-icons/fc";

// function SearchBar({ onSearch }) {
function SearchBar() {  

const [searchPatient, setSearchPatient] = useState('');

  const handleSearch = () => {
    // onSearch(searchTerm); // Call the callback function with the search term
    console.log("working on it")
  };

  return (
    <div>
      <input className="border-2 hover:border-indigo-500 rounded-2xl"
        type="text"
        placeholder="Search Patient"
        value={searchPatient}
        onChange={(e) => setSearchPatient(e.target.value)}
      />
      <button onClick={handleSearch}><i className="text-dark-green text-3xl hover:opacity-40"><FcSearch /></i></button>
    </div>
  );
}

export default SearchBar;