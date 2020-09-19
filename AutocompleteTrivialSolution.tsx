import React, { Fragment, useState } from "react";
import { api } from "./api";

// We will use this promise variable to store the latest promise outside of the component's bracket scope. This way we can acess it through out all of the change events that the user triggers.
let promise;

export const AutocompleteTrivialSolution: React.FC = () => {
  const [apiResult, setApiResult] = useState("");
  const handleChange = e => {
    // If we already have a stored promise, cancel it.
  	if(promise){
      // cancel the promise...
    }
    // Store the new promise to the promise variable we prepared before. This way the promise variable will be always up to date with the promise from the latest request.
    promise = api(e.target.value);
    // The localPromise will alway have the promise we got with this change event.
    const localPromise = promise;
    promise.then(result => {
      // Now we'll compare the promise from this change event with the promise from the latest change event. If the localPromse is indeed the latest promise we'll send the response as the new state.
      if(promise === localPromise){
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
