// client/src/main.tsx
import "./index.css";      // ← THIS ensures Vite sees and bundles your CSS

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// (the rest of your React render logic)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
