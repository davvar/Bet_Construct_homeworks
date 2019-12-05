import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <div className="container">
              <Header />
              <Content />
      </div>
    </div>
  );
}

export default App;
