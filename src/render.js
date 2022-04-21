import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addDialogMessage, updateMessageText } from "./redux/state";

export let renderDOM = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addDialogMessage={addDialogMessage} updateMessageText={updateMessageText} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
