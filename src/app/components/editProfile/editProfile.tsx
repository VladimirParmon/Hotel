import { Button, FormControlLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DatePickerFormik } from "../bookingControls/datePicker/datePickerFormik";
import { Window, Form } from "./components";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Must be at least 2 characters long")
    .required("Please enter your first name"),
  lastName: Yup.string()
    .min(2, "Must be at least 2 characters long")
    .required("Please enter your last name"),
  gender: Yup.string().required("Please select your gender"),
  dateOfBirth: Yup.date().nullable().required("Please select your date of birth"),
  email: Yup.string().email("Email is invalid").required("Please enter your email"),
  password: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Please enter your password"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export function EditProfile() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "male",
      dateOfBirth: null,
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //TODO: changes submission
    },
  });

  return (
    <Window>
      <Paper elevation={5}>
        <Form onSubmit={formik.handleSubmit}>
          <TextField
            name="firstName"
            fullWidth
            label="First name"
            color="secondary"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            name="lastName"
            fullWidth
            label="Last name"
            color="secondary"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <RadioGroup name="gender" value={formik.values.gender} onChange={formik.handleChange}>
            <FormControlLabel value="male" control={<Radio color="secondary" />} label="Male" />
            <FormControlLabel value="female" control={<Radio color="secondary" />} label="Female" />
          </RadioGroup>
          <DatePickerFormik
            name="dateOfBirth"
            value={formik.values.dateOfBirth}
            setFieldValue={formik.setFieldValue}
            touched={formik.touched.dateOfBirth}
            error={formik.errors.dateOfBirth}
          />
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
          <TextField
            name="confirmPassword"
            type="password"
            fullWidth
            label="Confirm password"
            color="secondary"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
          <Button variant="contained" color="secondary" sx={{ marginTop: "10px" }} type="submit">
            Submit
          </Button>
        </Form>
      </Paper>
    </Window>
  );
}
