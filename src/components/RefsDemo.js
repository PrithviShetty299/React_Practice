import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.cbref = null;
    this.setCbRef = (element) => {
      this.cbref = element;
    };
  }

  componentDidMount() {
    // console.log(this.inputRef);
    // this.inputRef.current.focus();
    if (this.cbref) {
      // callback ref is called only after the component is mounted so we need to check if it is null or not
      this.cbref.focus();
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
