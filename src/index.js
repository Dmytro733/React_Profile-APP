import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

let renderDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} addNewPost={store.addNewPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} addDialogMessage={store.addDialogMessage.bind(store)} updateMessageText={store.updateMessageText.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
    );
};

renderDOM();
store.rerender(renderDOM);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
