import { Link as RouterLink } from "react-router-dom";
import { Button, Container, FormControl, FormGroup, Link, Stack, TextField, Typography } from '@mui/material';
import { styled } from "@mui/system";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { signinRequest } from "../../../api";



const SigninFormContainer = styled(Container)(({theme})=>({
    border: '1px solid blue',
    padding: '30px 0px',
    
    [theme.breakpoints.up('md')] : {
        width: '500px',
    }
}))

const FormHeader = styled(Typography)(()=>({
    marginBottom: '20px',
    fontSize: '24px',
    textAlign: 'center',
}))

const CustomLink = styled(Link)(()=>({
    fontSize: '17px',
}))

const SigninForm = () => {
    const signinSchema = Yup.object({
        username: Yup.string()
        .typeError('invalid text')
        .min(5, 'atleast 5 characters')
        .max(20, 'maximum of 20 characters')
        .trim()
        .required('username is required'),
        password: Yup.string()
        .typeError('invalid text')
        .min(5, 'atleast 5 characters')
        .max(20, 'maximum of 20 characters')
        .trim()
        .required('password is required')
    })
    
    return ( 
        <SigninFormContainer>
            <Formik
                initialValues={{ username:'', password:'' }}
                validationSchema={signinSchema}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values)=>{
                    signinRequest(values);
                }}
                
            >
                {({ errors, touched })=>(
                    <Form>
                        <FormHeader> Signin </FormHeader>

                        <Stack direction="column" gap={3}>
                            <Field
                                name="username"
                                as={TextField}
                                placeholder="username"
                                autoComplete='off'
                                error={touched.username && Boolean(errors.username)}
                                helperText={touched.username && errors.username}
                            />

                            <Stack direction="column" gap={1}>
                                <Field
                                    name="password"
                                    as={TextField}
                                    fullWidth
                                    placeholder="password"
                                    autoComplete='off'
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                />



                            </Stack>

                            <Button
                                type="submit"
                                size="large"
                                variant="contained"
                                disableElevation
                            >
                                Submit
                            </Button>
                        </Stack>

                    </Form>
                )}
            </Formik>
        </SigninFormContainer>
            
     );
}
 
export default SigninForm;