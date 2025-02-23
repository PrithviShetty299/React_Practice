import React from "react";

// function Greet() {
//   return <h1>Hello, World!</h1>;
// }

export const Greet = (props) => {
  console.log(props);
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello, {name} a.k.a {heroName}
      </h1>
      {props.children}
    </div>
  );
};

// export default Greet;
