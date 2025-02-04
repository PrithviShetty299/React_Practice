import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greeetParent = this.greeetParent.bind(this);
  }

  greeetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <>
        <ChildComponent greetHandler={this.greeetParent} />
      </>
    );
  }
}

export default ParentComponent;
