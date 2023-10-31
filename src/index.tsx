import "./assets/style/global.css";

import ReactDOM from "react-dom/client";
import Home from "./views/home/Home";
import { Provider } from "react-redux";
import { globalStore } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={globalStore}>
    <Home />
  </Provider>
);
