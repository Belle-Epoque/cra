import React from "react";

import Class from "./design";

// HOC example with Counter logic.
const withCounter = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    // Auto bind with arrow function
    setCount = () => {
      this.setState(({ count: prevCount }) => ({
        count: prevCount + 1
      }));
    };

    render() {
      const { count } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          count={count}
          setCountOnClick={this.setCount}
        />
      );
    }
  };
};

export default withCounter(Class);
