import React from "react";
import { render } from "react-dom";
import {AutocompleteTrivialMistake} from "./AutocompleteTrivialMistake";
import {AutocompleteTrivialSolution} from "./AutocompleteTrivialSolution";
import {AutocompleteCompleteSolution} from "./AutocompleteCompleteSolution";
import "./style.css";

interface AppProps {

}
export const App: React.FC = () => {
  return (
    <div>
      <h1>
        Making autocomplete with react - common mistakes and their solutions 🤯
      </h1>

      <AutocompleteTrivialMistake />
      <AutocompleteTrivialSolution />
      <AutocompleteCompleteSolution />
    </div>
  );
};

render(<App />, document.getElementById("root"));
