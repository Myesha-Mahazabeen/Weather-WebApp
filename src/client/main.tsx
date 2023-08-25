import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";

if (process.env.NODE_ENV !== "production") {
  const axe = await import("@axe-core/react");
  void axe.default(React, ReactDOM, 1000);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
