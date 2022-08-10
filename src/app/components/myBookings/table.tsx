import { Typography } from "@mui/material";
import { Booking } from "app/constants/models";
import { getFormattedDate } from "app/services/getFormattedDate";
import { Table } from "./components";

interface TableComponentProps {
  booking: Booking;
}

export function TableComponent({ booking }: TableComponentProps) {
  return (
    <>
      <Table>
        <tbody>
          <tr>
            <td>
              <Typography>Booking registered:</Typography>
            </td>
            <td>
              <Typography>{getFormattedDate(booking.bookingDate)}</Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography>Arrival date:</Typography>
            </td>
            <td>
              <Typography>{getFormattedDate(booking.occupationDate.from)}</Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography>Departure date:</Typography>
            </td>
            <td>
              <Typography>{getFormattedDate(booking.occupationDate.to)}</Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography>Guests amount:</Typography>
            </td>
            <td>
              <Typography>{booking.guests.adults} adult(s)</Typography>
              <Typography>{booking.guests.infants} infant(s)</Typography>
              <Typography>{booking.guests.children} children</Typography>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <tfoot>
          <tr>
            <td>
              <Typography variant="h5">Total price:</Typography>
            </td>
            <td>
              <Typography variant="h5">${booking.totalPrice}</Typography>
            </td>
          </tr>
        </tfoot>
      </Table>
    </>
  );
}
