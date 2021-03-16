import Directory from "./Components/Directory";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="Header">
          <h2 id="Home">Home</h2>
        </div>
        <Directory />
      </div>
    );
  }
}

export default App;
