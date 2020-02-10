import React, { Fragment } from "react";

const INCREMENT = 12;

class Counter extends React.Component {
  state = {
    count: 0
  };

  setCount = () => {
    const { increment = INCREMENT } = this.props;
    this.setState(({ count: prevCount }) => ({
      count: prevCount + increment
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={this.setCount}>Cliquez ici</button>
      </>
    );
  }
}

export default Counter;
