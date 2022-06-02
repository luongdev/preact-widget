/* @jsx h */
import { h, render } from "preact";

import './index.css';

import App from "./App.js";

const appRoot = document.querySelector("#omicx-call-widget");

render(<App />, appRoot);