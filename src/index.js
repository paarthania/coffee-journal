import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Welcome to My Simple React Page!</h1>
      <p>This is a minimal React app, created without CRA.</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
