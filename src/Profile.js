import React, { Component } from "react";
import ReactDOM from "react-dom";
import Personalinfo from "./Personalinfo";
import Name from "./Name";
import Email from "./Email";
import Adress from "./Adress";

class Profile extends Component {
  render() {
    return (
      <div className="app">
        <Personalinfo />
        <Name />
        <Email />
        <Adress />
      </div>
    );
  }
}

export default Profile;

const rootElement = document.querySelector("#root");
ReactDOM.render(<Profile />, rootElement);
