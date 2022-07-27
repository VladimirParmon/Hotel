import BookingControlsComponent from "app/components/bookingControls";
import { DisplayControls } from "app/components/displayControls/displayControls";

export function ApartmentsPage() {
  return (
    <div id="apartments-page">
      <BookingControlsComponent />
      <div id="display">
        <DisplayControls />
      </div>
    </div>
  );
}
