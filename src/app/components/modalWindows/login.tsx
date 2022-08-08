import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalForm, ModalWindow } from "./components";

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
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //TODO: login submission
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
        <Button variant="contained" color="secondary" sx={{ marginTop: "10px" }} type="submit">
          Login in
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => close()}>
          Close
        </Button>
      </ModalForm>
    </ModalWindow>
  );
}
