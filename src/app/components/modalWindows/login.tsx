import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../loader";
import { ModalForm, ModalWindow } from "./components";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { logUserIn, selectUserInfo } from "app/redux/userSlice";

const validationSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Please enter your email"),
  password: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Please enter your password"),
});

interface LoginModalWindowProps {
  close: () => void;
}

export function LoginModalWindow({ close }: LoginModalWindowProps) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectUserInfo).isLoading;
  const error = useAppSelector(selectUserInfo).error;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(logUserIn(values.email, values.password));
    },
  });

  return (
    <ModalWindow onClick={() => close()}>
      <ModalForm onSubmit={formik.handleSubmit} onClick={(e) => e.stopPropagation()}>
        <TextField
          name="email"
          fullWidth
          label="Email"
          color="secondary"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="password"
          type="password"
          fullWidth
          label="Password"
          color="secondary"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        {error && <Typography>{error}</Typography>}
        {isLoading ? (
          <Loader />
        ) : (
          <Button variant="contained" color="secondary" sx={{ marginTop: "10px" }} type="submit">
            Login in
          </Button>
        )}
        <Button variant="outlined" color="secondary" onClick={() => close()}>
          Close
        </Button>
      </ModalForm>
    </ModalWindow>
  );
}
