import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./Pages/Home";
import { Home2 } from "./Pages/Home2";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
