import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// React.createElement => Object => HTMLElement(render)
// const heading = React.createElement("h1", {id: "heading"}, "Bunty is learning react 👨🏻‍💻");
// console.log(heading);

// JSX syntax
// const jsxHeading = (
//    <h1 id="heading" className="head" tabIndex="5">
//     Bunty is learning JSX 👨🏻‍💻
//   </h1>
// );

// JSX => Babels transpiles it to React.createElement => ReactElement-JS Object => Parcel Bundle it => Browser render it

const Title = () => (
   <h1 id="heading" className="head" tabIndex="5">
    Bunty is learning JSX 👨🏻‍💻
  </h1>
);


//Component Composition
const HeadingComponent = () => (
  <><Title /><h1>This is a functional component</h1></>
);



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />)
