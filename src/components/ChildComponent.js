import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.clickHandler}>Click</button>
    </div>
  );
}

export default ChildComponent;
