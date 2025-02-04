import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>This is a Portal demo</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
