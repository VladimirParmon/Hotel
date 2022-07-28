import { usePagination } from "app/pages/usePagination";
import { useFilteredState } from "app/redux/useFilteredState";
import Pagination from "@mui/material/Pagination";
import Card from "../card";
import { useEffect } from "react";

interface DisplayProps {
  scrollToTop: () => void;
}

export function Display({ scrollToTop }: DisplayProps) {
  const dataToShow = useFilteredState();
  const { currentPage, totalPages, currentPageData, setCurrentPage } = usePagination(dataToShow);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage, scrollToTop]);

  return (
    <div id="display">
      {currentPageData.map((apartment) => (
        <Card apartment={apartment} key={apartment.id} />
      ))}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        sx={{ width: "100%" }}
      />
    </div>
  );
}
