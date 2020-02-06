import React from "react";
import "./styles.css";

import Form from "./Form";

export default class App extends React.Component {
  state = {
    tableDate: []
  };
  handleFormSubmit = newRow => {
    this.setState({
      tableDate: [...this.state.tableDate, newRow]
    });
  };
  render() {
    let data = this.state.tableDate;
    return (
      <div className="App">
        <Form formSubmitted={this.handleFormSubmit} />
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Background</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.background}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
