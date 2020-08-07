import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onClick,
      onDelete,
      onIncrement,
      onReset,
      counters,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary m-2 btn-sm" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
