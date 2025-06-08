/** react */
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

/** material ui */
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/system";
import {
  Alert,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

/** formik */
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

/** context */
import { useAuthContext } from "../../../context/auth/authProvider";

const SigninFormContainer = styled(Container)(({ theme }) => ({
  padding: "30px 0px",
  [theme.breakpoints.up("md")]: {
    width: "500px",
  },
}));

const FormHeader = styled(Typography)(() => ({
  marginBottom: "20px",
  fontSize: "24px",
  textAlign: "center",
}));

const CustomLink = styled(Link)(() => ({
  fontSize: "17px",
}));

const SigninForm = () => {
  const { errorMessage, signinRequest } = useAuthContext();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const signinSchema = Yup.object({
    username: Yup.string()
      .typeError("invalid text")
      .min(5, "at least 5 characters")
      .max(20, "maximum of 20 characters")
      .trim()
      .required("username is required"),
    password: Yup.string()
      .typeError("invalid text")
      .min(5, "at least 5 characters")
      .max(20, "maximum of 20 characters")
      .trim()
      .required("password is required"),
  });

  return (
    <SigninFormContainer>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={signinSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values) => {
          const res = await signinRequest(values);
          if (res.status === 200 && res.data.success) {
            navigate("/client/dashboard");
          }
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <FormHeader> Signin </FormHeader>

            {errorMessage && (
              <Alert severity="warning" sx={{ marginBottom: "10px" }}>
                {errorMessage}
              </Alert>
            )}

            <Stack direction="column" gap={3}>
              <Field
                name="username"
                as={TextField}
                placeholder="username"
                autoComplete="off"
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />

              <Stack direction="column" gap={1}>
                <Field
                  name="password"
                  as={TextField}
                  type={showPass ? "text" : "password"}
                  fullWidth
                  placeholder="password"
                  autoComplete="off"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPass((prev) => !prev)}
                          edge="end"
                        >
                          {showPass ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="large"
                variant="contained"
                disableElevation
              >
                {isSubmitting ? "Loading..." : "Signin"}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </SigninFormContainer>
  );
};

export default SigninForm;
