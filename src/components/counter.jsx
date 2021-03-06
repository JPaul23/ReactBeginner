import React, { Component } from "react";

class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prprops", prevProps);
    console.log("prstate", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call and get new data from server
    }
  }

  //this is called just before the component is removed from DOM
  componentWillUnmount() {
    console.log("Count - Unmounted");
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
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
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter; //avoid repeating this.state...
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
