import { Container } from "@mui/material";
import { styled } from "@mui/system";
import { UserSidebar } from "../../components";

const DashboardContainer = styled (Container)(()=>({
    border: '1px solid blue',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
}))

const Dashboard = () => {
    return ( 
        <DashboardContainer maxWidth disableGutters>
            <UserSidebar/>
        </DashboardContainer>
     );
}
 
export default Dashboard;