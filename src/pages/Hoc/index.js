import { withStateHandlers } from "recompose";

import Hoc from "./design";

const withCounter = withStateHandlers(
  { count: 0 },
  {
    setCountOnClick: ({ count }) => () => ({
      count: count + 1
    })
  }
);

export default withCounter(Hoc);
