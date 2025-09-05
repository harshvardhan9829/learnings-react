import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import TikTakToe from "../tic_tac_toe/TikTakToe.jsx"
import NavItems from "../nav_item/NavItems.jsx";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// ReactDOM.createRoot(entryPoint).render(<TikTakToe />); // top run the tik tak toe game
// ReactDOM.createRoot(entryPoint).render(<NavItems />);
