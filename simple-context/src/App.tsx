import React, { useState } from "react";
import { StoreContext } from "./stores";
import ContentContainer from "./components/ContentContainer";

function App() {
  const store = useState({
    first: "",
    last: "",
  });

  return (
    <StoreContext.Provider value={store}>
      <div className="container">
        <h5>App</h5>
        <ContentContainer />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
