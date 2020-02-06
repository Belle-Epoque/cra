import React, { Fragment } from "react";

class Class extends React.Component {
  render() {
    const { count, setCountOnClick } = this.props;
    return (
      <Fragment>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={setCountOnClick}>Cliquez ici</button>
      </Fragment>
    );
  }
}

export default Class;
