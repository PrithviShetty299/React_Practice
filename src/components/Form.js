import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
    };
  }
  //   handleNameChange = (event) => {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //     console.log(this.state.firstName + " " + this.state.lastName);
  //   };
  handleFirstNameChange = (event) => {
    this.setState(
      {
        firstName: event.target.value,
      },
      () => {
        console.log(this.state.firstName);
      }
    );
  };

  handleLastNameChange = (event) => {
    this.setState(
      {
        lastName: event.target.value,
      },
      () => console.log(this.state.lastName)
    );
  };

  handleSubmit = (event) => {
    alert(`${this.state.firstName} ${this.state.lastName}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
