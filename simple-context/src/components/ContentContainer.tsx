import React, { memo } from "react";
import FormContainer from "./FormContainer";
import DisplayContainer from "./DisplayContainer";

const ContentContainer = memo(() => {
  return (
    <div className="container">
      <h5>ContentContainer</h5>
      <FormContainer />
      <DisplayContainer />
    </div>
  );
});

export default ContentContainer;
