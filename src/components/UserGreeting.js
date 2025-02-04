import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vishwas</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    //   if (this.state.isLoggedIn) {
    //       return (
    //           <div>Welcome Vishwas</div>
    //       )
    //   } else {
    //       return (
    //           <div>Welcome Guest</div>
    //       )
    //   }
    return (
      <div>
        {/* <div>Welcome Vishwas</div> */}
        {/* <div>Welcome Guest</div> */}
        {/* <div>{message}</div> */}
        {this.state.isLoggedIn ? (
          <div>Welcome Vishwas</div>
        ) : (
          <div>Welcome Guest</div>
        )}
        {this.state.isLoggedIn && <div>Welcome Vishwas</div>}
      </div>
    );
  }
}

export default UserGreeting;
