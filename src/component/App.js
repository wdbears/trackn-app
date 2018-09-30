import React, { Component } from "react";
import logo from "../logo.svg";
import "../style/App.css";

import Navbar from "./Navbar";
import Form from "./Form";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
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
