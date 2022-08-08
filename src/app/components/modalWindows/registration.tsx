import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, ModalForm, ModalWindow } from "./components";
import { NavigationLinks } from "app/constants/enums";
import { DatePickerFormik } from "../bookingControls/datePicker/datePickerFormik";

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
  terms: Yup.boolean().required("You must agree with terms to proceed"),
});

interface RegistrationModalWindowProps {
  close: () => void;
}

export function RegistrationModalWindow({ close }: RegistrationModalWindowProps) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "male",
      dateOfBirth: null,
      email: "",
      password: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //TODO: registration submission
    },
  });

  return (
    <ModalWindow onClick={() => close()}>
      <ModalForm
        onSubmit={formik.handleSubmit}
        onClick={(e) => e.stopPropagation()}
        style={{ height: "100vh" }}
      >
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
        <FormControlLabel
          control={<Checkbox checked={formik.values.terms} color="secondary" />}
          label={
            <Typography>
              I agree with the <Link to={NavigationLinks.TERMS}>terms of service</Link>
            </Typography>
          }
          name="terms"
          onChange={formik.handleChange}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: "10px" }}
          type="submit"
          disabled={!formik.values.terms}
        >
          Register
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => close()}>
          Close
        </Button>
      </ModalForm>
    </ModalWindow>
  );
}
