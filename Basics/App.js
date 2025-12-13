import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";


const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello ReactJS!"
);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an h1 Tag")
//   )
// );

const parent2 = React.createElement(
  "div",
  { id: "parent2" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child-1" },
      [
        React.createElement("h1", { key: "child-1-h1" }, "I am h1 tag"),
        React.createElement("h2", { key: "child-1-h2" }, "I'm an h2 tag"),
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "child-2" },
      [
        React.createElement("h1", { key: "child-2-h1" }, "I am h1 tag"),
        React.createElement("h2", { key: "child-2-h2" }, "I'm an h2 tag"),
      ]
    ),
  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(parent2);


