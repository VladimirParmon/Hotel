import { styled } from "@mui/material/styles";

export const BookingControls = styled("div")(
  ({ theme }) => `
  width: 100%;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  ${theme.breakpoints.down("tablets")} {
    max-width: 100%;
  }
`
);
