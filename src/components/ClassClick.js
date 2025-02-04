import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler() {
    console.log("The button was clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;
