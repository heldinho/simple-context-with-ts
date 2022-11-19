import React, { useState, createContext } from "react";

function useStoreData() {
  const store = useState({
    first: "",
    last: "",
  });
  return store;
}

type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

export const StoreContext = createContext<UseStoreDataReturnType | null>(null);
