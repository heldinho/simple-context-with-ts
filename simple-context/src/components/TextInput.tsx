import React, { useContext } from "react";
import { StoreContext } from "../stores";

const TextInput = ({ value }: { value: "first" | "last" }) => {
  const [store, setStore] = useContext(StoreContext)!;
  return (
    <div className="field">
      {value}:{" "}
      <input
        value={store[value]}
        onChange={(e) => setStore({ ...store, [value]: e.target.value })}
      />
    </div>
  );
};

export default TextInput;
