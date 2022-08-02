import RatingSelector from "../ratingSelector";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  feedbackField: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(225, "Must be 225 characters or less"),
});

export function FeedbackForm() {
  const [starState, setStarState] = useState(-1);
  const formik = useFormik({
    initialValues: {
      feedbackField: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //TODO: feedback submission
    },
  });

  function buttonDisabler(): boolean {
    let result = false;
    if (Boolean(formik.errors.feedbackField) || !formik.dirty) {
      result = true;
    }

    if (starState !== -1) {
      result = false;
    }
    return result;
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="feedbackField"
          fullWidth
          multiline
          rows={6}
          label="Leave your feedback here..."
          color="secondary"
          value={formik.values.feedbackField}
          onChange={formik.handleChange}
          error={formik.touched.feedbackField && Boolean(formik.errors.feedbackField)}
          helperText={formik.touched.feedbackField && formik.errors.feedbackField}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Your rating:</span>
          <RatingSelector starSize={30} starState={starState} setStarState={setStarState} />
        </div>
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: "10px" }}
          type="submit"
          disabled={buttonDisabler()}
        >
          Send
        </Button>
      </form>
    </>
  );
}
