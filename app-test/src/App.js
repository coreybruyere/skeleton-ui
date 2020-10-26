import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button, Link } from "@skeleton-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="primary">hello</Button>
        <Button variant="bare">hello</Button>
        <Button variant="secondary">secondary</Button>
        <Link variant="label">A Label</Link>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
