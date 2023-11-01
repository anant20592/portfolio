import ReactDOM from "react-dom/client";
import "./styles/_root.scss";
import App from "./App";
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode as Element);
root.render(<App />);
