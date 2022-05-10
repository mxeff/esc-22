import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import Twemoji from "react-twemoji";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Twemoji>
    <Router>
      <App />
    </Router>
  </Twemoji>
);
