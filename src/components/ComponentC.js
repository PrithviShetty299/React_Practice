import React, { Component } from "react";
import ComponentE from "./ComponentE";
import { UserProvider } from "./userContext";

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Prithvi">
          <ComponentE />
        </UserProvider>
      </div>
    );
  }
}

export default ComponentC;
