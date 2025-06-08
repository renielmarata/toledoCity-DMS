import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FaUser } from "react-icons/fa";


const SideBarContainer = styled(Box)(({theme}) => ({
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '10px',
    maxHeight: '100%',
    width: '190px',

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}))

const LogoText = styled(Typography)(() => ({
    fontSize: '20px',
    fontWeight: '600',
}))

const Sidebar = () => {
    return ( 
        <SideBarContainer>
            <Stack direction="row" spacing={2}>
                <FaUser size={25}/>
            </Stack>
        </SideBarContainer>
     );
}
 
export default Sidebar;