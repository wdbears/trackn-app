import React, { Component } from "react";
import "../style/Form.css";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <table>
          <thead>
            <tr>
              <th>Devs</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ahmad</td>
              <td>Overlord</td>
            </tr>
            <tr>
              <td>Luis</td>
              <td>Backboi</td>
            </tr>
            <tr>
              <td>Jarman</td>
              <td>Funko COOK</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;
