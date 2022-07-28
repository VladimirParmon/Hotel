import BookingControlsComponent from "app/components/bookingControls";
import Display from "app/components/display";
import { DisplayControls } from "app/components/displayControls/displayControls";

export function ApartmentsPage() {
  return (
    <div className="apartments-page">
      <BookingControlsComponent />
      <div id="display-group">
        <DisplayControls />
        <Display />
      </div>
    </div>
  );
}
