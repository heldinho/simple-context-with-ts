import React, { memo } from "react";
import TextInput from "./TextInput";

const FormContainer = memo(() => {
  return (
    <div className="container">
      <h5>FormContainer</h5>
      <TextInput value="first" />
      <TextInput value="last" />
    </div>
  );
});

export default FormContainer;
