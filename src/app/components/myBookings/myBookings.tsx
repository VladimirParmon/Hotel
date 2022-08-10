import { Button, Typography } from "@mui/material";
import { selectApartmentsInfo } from "app/redux/apartmentsSlice";
import { getBookings, selectBookingsState } from "app/redux/bookingsSlice";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";

import { useEffect } from "react";
import Card from "../card";
import Loader from "../loader";
import { Booking, BookingInfo, Bookings } from "./components";
import { TableComponent } from "./table";

export function MyBookings() {
  const dispatch = useAppDispatch();
  const bookings = useAppSelector(selectBookingsState).bookings;
  const isLoading = useAppSelector(selectBookingsState).isLoading;
  const apartments = useAppSelector(selectApartmentsInfo);

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Bookings>
          {bookings.map((booking) => {
            const apartment = apartments.find((apartment) => apartment.id === booking.apartmentId);
            if (!apartment) return <p>Something went wrong</p>;
            return (
              <Booking key={booking.bookingId}>
                <Card apartment={apartment} noSizeChange />
                <BookingInfo elevation={5}>
                  <Typography variant="h3">№ {booking.bookingId}</Typography>
                  <Typography variant="h3">Full booking information:</Typography>
                  <TableComponent booking={booking} />
                </BookingInfo>
                <Button variant="outlined" color="secondary" sx={{ flexGrow: 1, maxWidth: "90px" }}>
                  Cancel
                </Button>
              </Booking>
            );
          })}
        </Bookings>
      )}
    </>
  );
}
