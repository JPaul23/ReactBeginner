import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    //the data the components need
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this); //binding the  to the fn
  } */

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //avoid repeating this.state...
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
