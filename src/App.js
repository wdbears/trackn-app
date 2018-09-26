import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tracko</h1>
        </header>
        <p className="App-intro">
          {"An inventory and sales tracking application."}
        </p>
        <p className="Description">{"A reseller's best friend. :)"}</p>
      </div>
    );
  }
}

export default App;
