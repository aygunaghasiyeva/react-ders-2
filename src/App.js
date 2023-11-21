import "./styles.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Profile />
      </div>
    );
  }
}

export default App;

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
