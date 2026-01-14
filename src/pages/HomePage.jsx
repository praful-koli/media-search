import React from "react";
import SearchBar from "../components/SearchBar";
import Tab from "../components/Tab";
import ResultGrid from "../components/ResultGrid";

function HomePage() {
  return (
    <div>
      <div className=" text-center p-4 text-2xl font-semibold space-x-1 bg-blue-950">Meida Search</div>
      <SearchBar />
      <Tab />
      <ResultGrid />
    </div>
  );
}

export default HomePage;
