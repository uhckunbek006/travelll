import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import RooteContext from "./components/context/RooteContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RooteContext>
      <App />
    </RooteContext>
  </BrowserRouter>
);
