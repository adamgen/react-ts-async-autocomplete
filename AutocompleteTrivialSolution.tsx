import React, { Fragment, useState } from "react";
import { api } from "./api";

let promise;

export const AutocompleteTrivialSolution: React.FC = () => {
  const [apiResult, setApiResult] = useState("");
  const handleChange = e => {
    promise = api(e.target.value);
    const localPromise = promise;
    promise.then(result => {
      if (promise === localPromise) {
        setApiResult(result);
      }
    });
  };

  return (
    <div>
      <h3>AutocompleteTrivialSolution</h3>
      <input onChange={handleChange} />
      <p>API search result for: {apiResult}</p>
    </div>
  );
};
