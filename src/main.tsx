import "./scss/index.scss";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";

if (process.env.NODE_ENV !== "production") {
  const originalWarn = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0]?.includes(
        "Support for defaultProps will be removed from function components in a future major release."
      )
    ) {
      return;
    }
    originalWarn(...args);
  };
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
