import React, { Component } from "react";
import Card from "./Card";
import Navigation from "./Navigator";
import data from "./data";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      data: data,
      index: 0,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    if (this.state.index < this.state.data.length - 1) {
      this.setState({ index: this.state.index + 1 });
    }
  }

  previous() {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    }
  }

  render() {
    return (
      <div className="Box">
        <div id="Card-Box">
          {" "}
          <Card data={this.state.data} index={this.state.index} />
        </div>

        <div id="navbar">
          <Navigation next={this.next} previous={this.previous} />
        </div>
      </div>
    );
  }
}

export default Directory;
