import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    //the data the components need
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this); //binding the  to the fn
  } */

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state; //avoid repeating this.state...
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
