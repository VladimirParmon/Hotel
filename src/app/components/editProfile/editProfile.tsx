import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { EditFormValues } from "app/constants/models";
import { useAppSelector } from "app/redux/hooks";
import { selectUserInfo } from "app/redux/userSlice";
import { useFormik } from "formik";
import { useState } from "react";
import Popup from "reactjs-popup";
import * as Yup from "yup";
import { DatePickerFormik } from "../bookingControls/datePicker/datePickerFormik";
import { Window, Form } from "./components";
import { ModalWindow } from "./modalWindow";

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
  changePassword: Yup.boolean(),
  newPassword: Yup.string().when("changePassword", {
    is: true,
    then: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Please enter a new password"),
  }),
  confirmNewPassword: Yup.string().when("changePassword", {
    is: true,
    then: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Please confirm your new password"),
  }),
});

export function EditProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFormValues, setEditFormValues] = useState<EditFormValues | null>(null);
  const [statusSpan, setStatusSpan] = useState({ hasError: false, message: "" });
  const userData = useAppSelector(selectUserInfo).userData;
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      firstName: userData?.userFirstName,
      lastName: userData?.userLastName,
      gender: userData?.userGender,
      dateOfBirth: userData?.userDateOfBirth,
      email: userData?.userEmail,
      changePassword: false,
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const x = values as EditFormValues;
      setIsModalOpen(true);
      setEditFormValues(x);
    },
  });

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleStatusMessage(message: string, hasError: boolean = false) {
    setStatusSpan({ hasError, message });
  }

  const statusMessageColor = statusSpan.hasError
    ? theme.palette.error.main
    : theme.palette.success.main;

  return (
    <Window>
      <Paper elevation={5}>
        <Form onSubmit={formik.handleSubmit}>
          {statusSpan && (
            <Typography variant="h5" sx={{ color: statusMessageColor, textAlign: "center" }}>
              {statusSpan.message}
            </Typography>
          )}
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
          <FormControlLabel
            control={<Checkbox checked={formik.values.changePassword} color="secondary" />}
            label={<Typography>I want to change my password</Typography>}
            name="changePassword"
            onChange={formik.handleChange}
          />
          <TextField
            name="newPassword"
            type="password"
            fullWidth
            label="New password"
            color="secondary"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            disabled={!formik.values.changePassword}
          />
          <TextField
            name="confirmNewPassword"
            type="password"
            fullWidth
            label="Confirm new password"
            color="secondary"
            value={formik.values.confirmNewPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmNewPassword && Boolean(formik.errors.confirmNewPassword)}
            helperText={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword}
            disabled={!formik.values.changePassword}
          />
          <Button variant="contained" color="secondary" sx={{ marginTop: "10px" }} type="submit">
            Submit
          </Button>
        </Form>
      </Paper>
      <Popup open={isModalOpen} closeOnDocumentClick onClose={closeModal}>
        <ModalWindow
          close={closeModal}
          editFormValues={editFormValues}
          handleStatusMessage={handleStatusMessage}
        />
      </Popup>
    </Window>
  );
}
