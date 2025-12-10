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

const parent2 = React.createElement("div", {id:"parent2"}, [ 
  React.createElement("div", {id:"child"}, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
   React.createElement("div", {id:"child2"}, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

//console.log(heading);
console.log(parent2);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent2);
