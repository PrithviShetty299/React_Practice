import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    alert("Hello");
  }

  render() {
    return (
      <>
        {/* <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button> */}
        <ChildComponent clickHandler={this.clickHandler} />
      </>
    );
  }
}

export default ParentComponent;
