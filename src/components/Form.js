import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      comments: "",
      topic: "react",
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

  handleCommentsChange = (event) => {
    this.setState(
      {
        comments: event.target.value,
      },
      () => console.log(this.state.comments)
    );
  };

  handleTopicChange = (event) => {
    this.setState(
      {
        topic: event.target.value,
      },
      () => console.log(this.state.topic)
    );
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.firstName} ${this.state.lastName} ${this.state.comments} ${this.state.topic}`
    );
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
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
