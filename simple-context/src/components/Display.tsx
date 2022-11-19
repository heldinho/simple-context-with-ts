import React, { useContext } from "react";
import { StoreContext } from "../stores";

const Display = ({ value }: { value: "first" | "last" }) => {
  const [store] = useContext(StoreContext)!;
  return (
    <div className="value">
      {value}: {store[value]}
    </div>
  );
};

export default Display;
