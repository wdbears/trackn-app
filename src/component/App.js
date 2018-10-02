import React, { Component } from "react";
import "../style/App.css";

import Navbar from "./Navbar";
import Form from "./Form";
import Greeting from "./Greeting";
import InventoryTable from "./InventoryTable";
import SoldTable from "./SoldTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-intro">
          <Greeting />
          {/* 
            A JSX comment 
            {"An inventory and sales tracking application..."}
            <p className="App-description">{"and a reseller's best friend."}</p>
            </p>
          */}
        </div>
        <div className="tables">
          <InventoryTable />
          <SoldTable />
        </div>
        <div className="email-submission">
          <p>Sign-up for an update on when trackn is live!</p>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
