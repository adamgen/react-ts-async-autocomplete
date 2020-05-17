import React, { Fragment, useState, useEffect } from "react";
import { api } from "./api";

export class Api {
  promise;
  async request(text) {
    this.promise = api(text);
    const localPromise = this.promise;
    const result = await this.promise;

    if (this.promise === localPromise) {
      return result;
    }
  }
}

export const AutocompleteCompleteSolution: React.FC = () => {
  const [apiResult, setApiResult] = useState("");
  const [apiClient, setApiClient] = useState();

  useEffect(() => {
    const client = new Api();
    setApiClient(client);
  }, []);

  const handleChange = async (e) => {
    if (!apiClient) {
      return;
    }
    const result = await apiClient.request(e.target.value);
    setApiResult(result);
  };

  return (
    <div>
      <h3>AutocompleteCompleteSolution</h3>
      <input onChange={handleChange} />
      <p>API search result for: {apiResult}</p>
    </div>
  );
};
