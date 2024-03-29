import App from "./app/App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
