import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ModelManager } from "@adobe/cq-spa-page-model-manager";
import "bootstrap/dist/css/bootstrap.min.css";

function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
}
document.addEventListener("DOMContentLoaded", () => {
    ModelManager.initialize({ path: process.env.REACT_APP_PAGE_MODEL_PATH }).then(model => {
        console.log('IN INdex');
        console.log(model);
        render();
    });
    // render();
});