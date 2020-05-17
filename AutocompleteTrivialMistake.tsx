import React, { Fragment, useState } from "react";
import { api } from "./api";

export const AutocompleteTrivialMistake: React.FC = () => {
  const [apiResult, setApiResult] = useState("");
  const handleChange = e => {
    api(e.target.value).then(result => {
      setApiResult(result);
    });
  };

  return (
    <div>
      <h3>AutocompleteTrivialMistake</h3>
      <input onChange={handleChange} />
      <p>API search result for: {apiResult}</p>
    </div>
  );
};
