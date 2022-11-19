import React, { memo } from "react";
import Display from "./Display";

const DisplayContainer = memo(() => {
  return (
    <div className="container">
      <h5>DisplayContainer</h5>
      <Display value="first" />
      <Display value="last" />
    </div>
  );
});

export default DisplayContainer;
