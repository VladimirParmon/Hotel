import { Button, TextField, Typography } from "@mui/material";
import { EditFormValues } from "app/constants/models";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { selectUserInfo, setIsLoading } from "app/redux/userSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as APIService from "../../services/APIService";
import Loader from "../loader";
import { Form, WindowWithBackground } from "./components";

const validationSchemaModal = Yup.object({
  email: Yup.string().email("Email is invalid").required("Please enter your email"),
  password: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Please enter your password"),
});

interface ModalWindowProps {
  close: () => void;
  editFormValues: EditFormValues | null;
  handleStatusMessage: (message: string, hasError?: boolean) => void;
}

export function ModalWindow({ close, editFormValues, handleStatusMessage }: ModalWindowProps) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectUserInfo).isLoading;
  const error = useAppSelector(selectUserInfo).error;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemaModal,
    onSubmit: (values) => {
      dispatch(setIsLoading(true));
      APIService.loginIn(values.email, values.password)
        .then(() => {
          //todo: submit post request to change user info in server
        })
        .then(() => {
          handleStatusMessage("Successfully updated");
        })
        .catch((err) => handleStatusMessage(err.toString(), true))
        .finally(() => {
          setTimeout(() => handleStatusMessage(""), 3000);
          close();
          dispatch(setIsLoading(false));
        });
    },
  });

  return (
    <WindowWithBackground onClick={() => close()}>
      <Form onSubmit={formik.handleSubmit} onClick={(e) => e.stopPropagation()}>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Security check
        </Typography>
        <TextField
          name="email"
          fullWidth
          label="Current email"
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
          label="Current password"
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
            Submit
          </Button>
        )}
        <Button variant="outlined" color="secondary" onClick={() => close()}>
          Close
        </Button>
      </Form>
    </WindowWithBackground>
  );
}
