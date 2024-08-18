import {createRoot} from "react-dom/client";
import {LoginChecker} from "./components/loginChecker";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<LoginChecker/>);