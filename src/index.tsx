import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './css/app.css';

const rootDiv: HTMLDivElement | null = document.querySelector("#root");
const root = createRoot(rootDiv as HTMLElement);

root.render(
  <>
    <App />
  </>
);
