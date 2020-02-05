import React, { useState } from "react";

import Hooks from "./design";

const HooksWrapper = () => {
  const [count, setCount] = useState(0);

  const setCountOnClick = () => setCount(count + 1);

  return <Hooks count={count} setCountOnClick={setCountOnClick} />;
};

export default HooksWrapper;
