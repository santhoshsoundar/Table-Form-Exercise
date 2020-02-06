import React from "react";
import "./styles.css";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    background: "engg"
  };

  submitForm = event => {
    event.preventDefault();
    this.props.formSubmitted(this.state);
  };

  handleFormUpdate = event => {
    const { name, value, type } = event.target;
    console.log(name, value, type);
    if (type === "radio") {
      this.setState({
        background: value
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  render() {
    return (
      <div className="formContainer">
        <form method="post" name="emp-form" onSubmit={this.submitForm}>
          <label className="formField">
            FirstName
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleFormUpdate}
            />
          </label>
          <label className="formField">
            LastName{" "}
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleFormUpdate}
            />
          </label>
          <label className="formField">
            Emp Background:
            <input
              type="radio"
              name="engg"
              value="engg"
              checked={this.state.background === "engg"}
              onChange={this.handleFormUpdate}
            />
            {"    "}
            Engg{" "}
            <input
              type="radio"
              name="nonengg"
              value="nonengg"
              checked={this.state.background === "nonengg"}
              onChange={this.handleFormUpdate}
            />
            Non Engg{" "}
          </label>
          <button className="actionButton">Submit</button>
        </form>
      </div>
    );
  }
}
