import { Routes, Route } from "react-router-dom";
import { AppLayout, PrivateRoute } from "./components";
import { LandingPage, UserDashboard } from "./pages";


const App = () => {
    return ( 
        <Routes>
            <Route element={<AppLayout/>}>
                <Route index element={<LandingPage/>}/>

                <Route element={<PrivateRoute/>}>
                    <Route path="/client/dashboard" element={<UserDashboard/>}/>
                </Route>
            </Route>
        </Routes>
     );
}
 
export default App;