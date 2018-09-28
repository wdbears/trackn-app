import React, { Component } from "react";
import logo from "../logo.svg";
import "../style/App.css";

import Form from "./Form";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">t r a c k n</h1>
        </header>
        <p className="App-intro">
          {"An inventory and sales tracking application..."}
          <p className="App-description">{"and a reseller's best friend."}</p>
        </p>
        <div>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
