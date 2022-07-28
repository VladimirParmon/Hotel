import BookingControlsComponent from "app/components/bookingControls";
import Display from "app/components/display";
import { DisplayControls } from "app/components/displayControls/displayControls";
import { useRef } from "react";

export function ApartmentsPage() {
  const ref = useRef<HTMLDivElement>(null);
  function scrollToTop() {
    ref.current?.scrollTo({ top: 0 });
  }
  return (
    <div className="apartments-page" ref={ref}>
      <BookingControlsComponent />
      <div id="display-group">
        <DisplayControls />
        <Display scrollToTop={scrollToTop} />
      </div>
    </div>
  );
}
