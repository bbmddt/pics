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
    <div>
      <form onSubmit={handleFormSumbit}>
        <input onChange={handleInputChange} value={term} />
      </form>
    </div>
  );
}

export default SearchBar;
