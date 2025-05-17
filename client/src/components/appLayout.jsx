import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { styled } from "@mui/system";

const AppLayoutContainer = styled (Container)(()=>({
    border: '1px solid red',
    minHeight: '100vh',
}))



const AppLayout = () => {
    return ( 
        <AppLayoutContainer maxWidth disableGutters>
            <Outlet/>
        </AppLayoutContainer>
     );
}
 
export default AppLayout;