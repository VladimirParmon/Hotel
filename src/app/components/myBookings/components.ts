import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Bookings = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  min-width: 300px;
  gap: 25px;
`;

export const Booking = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 20px;
`;

export const BookingInfo = styled(Paper)`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  gap: 15px;
  padding: 20px;
`;

export const Table = styled("table")(
  ({ theme }) => `
border: 1px solid ${theme.palette.primary.light};
width: 100%;
border-collapse: collapse;

td, tr {
  border: 1px solid ${theme.palette.primary.dark};
  padding: 6px;
}

td:nth-of-type(even) {
  background-color: ${theme.palette.primary.light};
  padding: 6px 28px;
}

tfoot {
  border-top: 5px solid ${theme.palette.primary.dark};
}
`
);
