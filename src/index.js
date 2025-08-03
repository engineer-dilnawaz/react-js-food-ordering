import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

// ReactDOM.render(<App />, document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
