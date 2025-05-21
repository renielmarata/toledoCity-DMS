import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import { AuthProvider } from "./context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </BrowserRouter>
)