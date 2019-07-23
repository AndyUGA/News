import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FetchData } from "./Components/FetchData";
import { Navbar } from "./Components/Navbar";
import { Test } from "./Components/Test";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Test />
      <FetchData />
    </div>
  );
}

export default App;
