import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components";
import { LandingPage } from "./pages";


const App = () => {
    return ( 
        <Routes>
            <Route element={<AppLayout/>}>
                <Route index element={<LandingPage/>}/>
            </Route>
        </Routes>
     );
}
 
export default App;