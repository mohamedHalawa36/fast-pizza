import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./index.css"
import router from "./Router/Router";

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;
