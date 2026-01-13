import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(setQuery(searchText));
    setSearchText("");
  }
  return (
    <div>
      <form className="flex gap-5 bg-gray-700 p-10" onSubmit={submitHandler}>
        <input
          type="search"
          value={searchText}
          placeholder="Search Image video  gif ...."
          onChange={(e) => setSearchText(e.target.value)}
          className="border-2  w-full border-gray-400 px-4 py-2 text-xl rounded-md  focus:outline-blue-700 focus:outline-2 focus:border-transparent"
          required
        />
        <button className="border-2 cursor-pointer border-gray-400 px-6 py-2 text-xl rounded-md  active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
