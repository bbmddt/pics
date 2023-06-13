import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSumbit = (e) => {
    e.preventDefault();

    onSubmit(term);
  };

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSumbit}>
        <label>Enter Search Term</label>
        <input onChange={handleInputChange} value={term} />
      </form>
    </div>
  );
}

export default SearchBar;
