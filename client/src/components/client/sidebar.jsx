import { Box } from "@mui/material";
import { styled } from "@mui/system";

const SideBarContainer = styled(Box)(({theme}) => ({
    border: '1px solid red',
    maxHeight: '100%',
    width: '190px',
    backgroundColor: 'lightgray',

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}))


const Sidebar = () => {
    return ( 
        <SideBarContainer>
            <h1>Sidebar</h1>
        </SideBarContainer>
     );
}
 
export default Sidebar;