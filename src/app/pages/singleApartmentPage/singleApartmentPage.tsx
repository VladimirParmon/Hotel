import { Typography } from "@mui/material";
import ApartmentDescription from "app/components/apartmentDescription";
import BookingWindow from "app/components/bookingWindow";
import SliderComponent from "app/components/slider";
import Stars from "app/components/stars";
import { selectFiltersInfo } from "app/redux/filtersSlice";
import { useAppSelector } from "app/redux/hooks";
import { useSingleApartmentInfo } from "app/redux/useSingleApartmentInfo";
import { useParams } from "react-router-dom";
import { CarouselContainer, HugeScreensBoundary, PageContainer } from "./components";

export function SingleApartmentPage() {
  const { id } = useParams();
  const apartment = useSingleApartmentInfo(id);
  const filters = useAppSelector(selectFiltersInfo);

  if (!apartment) return <p>Page not found</p>;

  return (
    <PageContainer>
      <HugeScreensBoundary>
        <CarouselContainer>
          <SliderComponent items={apartment.photos} />
          <div style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontSize: "2rem" }}>Apartment rating:</span>
              <Stars starSize={30} rating={apartment.rating} />
            </div>
            <span style={{ fontSize: "2rem" }}>{apartment.type} apartment</span>
          </div>
        </CarouselContainer>
        <BookingWindow apartment={apartment} filters={filters} highRes={true} />
        <ApartmentDescription apartment={apartment}>
          <BookingWindow apartment={apartment} filters={filters} highRes={false} />
        </ApartmentDescription>
      </HugeScreensBoundary>
    </PageContainer>
  );
}
