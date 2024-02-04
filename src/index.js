import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Create a root for concurrent rendering
const root = createRoot(document.getElementById("root"));

// Render the app using the root
root.render(<App />);
