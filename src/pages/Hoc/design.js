import React, { Fragment } from "react";

const Hoc = ({ count, setCountOnClick }) => (
  <Fragment>
    <p>Vous avez cliqué {count} fois</p>
    <button onClick={setCountOnClick}>Cliquez ici</button>
  </Fragment>
);

export default Hoc;
