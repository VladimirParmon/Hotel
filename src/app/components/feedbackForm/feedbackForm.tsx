import RatingSelector from "../ratingSelector";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export function FeedbackForm() {
  const [starState, setStarState] = useState(-1);

  return (
    <>
      <TextField
        fullWidth
        multiline
        rows={6}
        label="Leave your feedback here..."
        color="secondary"
        // error
        // helperText="Error text"
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>Your rating:</span>
        <RatingSelector starSize={30} starState={starState} setStarState={setStarState} />
      </div>
      <Button variant="contained" color="secondary" sx={{ marginTop: "10px" }}>
        Send
      </Button>
    </>
  );
}
