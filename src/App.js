import React, { Component } from "react";
import logo from "./images/box.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tracko App</h1>
        </header>
        <p className="App-intro">
          {
            "An application built to track shipments, inventory, restocks and sales."
          }
          <p>{"A reseller's best friend."}</p>
        </p>
      </div>
    );
  }
}

export default App;
