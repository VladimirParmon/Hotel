import { useFilteredState } from "app/redux/useFilteredState";
import Card from "../card";

export function Display() {
  const dataToShow = useFilteredState();
  return (
    <div id="display">
      {dataToShow.map((apartment) => (
        <Card apartment={apartment} key={apartment.id} />
      ))}
    </div>
  );
}
