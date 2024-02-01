import React, { useState } from "react";
import Button from "./components/Button/Button";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  const [searchData, setSearchData] = useState(); // Fixed the destructuring here
  return (
    <>
      <Navbar searchData={searchData} />
      <Hero searchData={searchData} />
    </>
  );
}

export default App;