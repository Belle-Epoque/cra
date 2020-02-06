import { compose, withState, withHandlers } from "recompose";

import Hoc from "./design";

const withCounter = compose(
  withState("count", "setCount", 0),
  withHandlers({
    setCountOnClick: ({ setCount, count }) => () => setCount(count + 1)
  })
);

export default withCounter(Hoc);
