import { selectApartmentsInfo } from "./apartmentsSlice";
import { useAppSelector } from "./hooks";

export function useSingleApartmentInfo(id: string | undefined) {
  const apartmentsData = useAppSelector(selectApartmentsInfo);
  if (!id) return null;
  return apartmentsData.find((apartment) => apartment.id === id);
}
