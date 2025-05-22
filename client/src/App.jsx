import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components";
import { LandingPage, UserDashboard } from "./pages";


const App = () => {
    return ( 
        <Routes>
            <Route element={<AppLayout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path="/user/dashboard" element={<UserDashboard/>}/>
            </Route>
        </Routes>
     );
}
 
export default App;