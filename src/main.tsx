import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// SPA deep-link restore: if the user landed via the 404.html fallback,
// recover the original path/query/hash before React Router boots.
const spaRedirect = sessionStorage.getItem("spa-redirect");
if (spaRedirect) {
  sessionStorage.removeItem("spa-redirect");
  if (spaRedirect !== window.location.pathname + window.location.search + window.location.hash) {
    window.history.replaceState(null, "", spaRedirect);
  }
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
