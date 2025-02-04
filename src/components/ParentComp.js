import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Doe",
      });
    }, 2000);
  }
  render() {
    console.log("*********Parent Component*********");
    return (
      <div>
        <div>Parent Component</div>
        {/* <RegComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
