import { Container } from "@mui/material";
import { styled } from "@mui/system";
import { SigninForm } from "../components";

const LandingPageContainer = styled (Container)(()=>({
    border: '1px solid green',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const LandingPage = () => {
    return ( 
        <LandingPageContainer>
            <SigninForm/>
        </LandingPageContainer>
     );
}
 
export default LandingPage;