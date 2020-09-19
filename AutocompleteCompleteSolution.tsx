import React, { useState, useMemo } from "react";
import { api } from "./api";

export const AutocompleteCompleteSolution: React.FC = () => {
  const [apiResult, setApiResult] = useState("");

  // Use memo will return the same object reference across all of the components renders. Meaning we have a consistent referense for all change events and component renders.
  const promiseStore = useMemo<{latestPromise: null | Promise<any>}>(() => ({latestPromise: null }), []);

  const handleChange = async e => {
    const localPromise = api(e.target.value).then((result) => {
      // Just like in the example above, we'll compare the localPromise with the latestPromise. If they're the same we'll udpate the state.
      if(localPromise === promiseStore.latestPromise){
        setApiResult(result);
      }
    });
    promiseStore.latestPromise = localPromise;
  };

  return (
    <div>
      <h3>AutocompleteCompleteSolution</h3>
      <input onChange={handleChange} />
      <p>API search result for: {apiResult}</p>
    </div>
  );
};
