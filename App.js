
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello world"
);


//Nested elements
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 element"),
    React.createElement("h1", {}, "I'm second h1 element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 element"),
    React.createElement("h1", {}, "I'm second h1 element"),
  ]),
]);
//render code in dom using react dom api method
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(root);
