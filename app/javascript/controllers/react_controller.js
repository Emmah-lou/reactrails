import { Controller } from "@hotwired/stimulus";
import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import { BrowserRouter } from "react-router-dom";
// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!");
    const app = document.getElementById("app");
    ReactDOM.render(<App />, app);
  }
}
