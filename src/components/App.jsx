import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { SearchBar } from "./SearchBar/SearchBar";

function App() {
  const handleSearch = (topic) => {
    console.log(topic);
  };

  return <SearchBar onSearch={handleSearch} />;
}

export default App;
