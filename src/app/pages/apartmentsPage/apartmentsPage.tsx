import BookingControlsComponent from "app/components/bookingControls";
import Display from "app/components/display";
import { DisplayControls } from "app/components/displayControls/displayControls";
import { useCallback, useRef } from "react";
import { ApartmentsPageContainer, DisplayGroup } from "./components";

export function ApartmentsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollToTop = useCallback(() => {
    ref.current?.scrollTo({ top: 0 });
  }, []);
  return (
    <ApartmentsPageContainer ref={ref}>
      <BookingControlsComponent />
      <DisplayGroup>
        <DisplayControls />
        <Display scrollToTop={scrollToTop} />
      </DisplayGroup>
    </ApartmentsPageContainer>
  );
}
