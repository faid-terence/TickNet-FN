import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
