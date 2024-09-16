/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { routes } from "./routes";

import "./assets/tailwindcss.css";
const root = document.getElementById("root");

render(() => <Router>{routes}</Router>, root!);
