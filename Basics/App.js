const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello ReactJS!"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 Tag")
  )
);



//console.log(heading);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
