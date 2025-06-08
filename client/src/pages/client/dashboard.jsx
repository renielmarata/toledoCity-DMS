import { Container } from "@mui/material";
import { styled } from "@mui/system";
import { ClientSidebar } from "../../components";

const DashboardContainer = styled (Container)(()=>({
    border: '1px solid blue',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
}))

const Dashboard = () => {
    return ( 
        <DashboardContainer maxWidth disableGutters>
            <ClientSidebar/>
        </DashboardContainer>
     );
}
 
export default Dashboard;