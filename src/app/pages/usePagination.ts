import { IApartment } from "app/constants/models";
import { selectFiltersInfo } from "app/redux/filtersSlice";
import { useAppSelector } from "app/redux/hooks";
import { useState } from "react";

export function usePagination(dataToShow: IApartment[]) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = useAppSelector(selectFiltersInfo).itemsPerPage;

  const totalPages = Math.ceil(dataToShow.length / pageSize);

  const currentPageData = dataToShow.slice(
    (currentPage - 1) * pageSize,
    (currentPage - 1) * pageSize + pageSize
  );

  return { currentPage, totalPages, currentPageData, setCurrentPage };
}
