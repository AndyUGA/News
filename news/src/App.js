import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FetchData } from "./Components/FetchData";
import { Navbar } from "./Components/Navbar";
import { Test } from "./Components/Test";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FetchData />
    </div>
  );
}

export default App;
