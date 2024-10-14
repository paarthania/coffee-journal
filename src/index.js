import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
function MainApp() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(<MainApp />, document.getElementById("root"));
