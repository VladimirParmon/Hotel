import { IApartment } from "app/constants/models";
import { selectFiltersInfo } from "app/redux/filtersSlice";
import { useAppSelector } from "app/redux/hooks";
import { useEffect, useState } from "react";

export function usePagination(dataToShow: IApartment[]) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = useAppSelector(selectFiltersInfo).itemsPerPage;

  const totalPages = Math.ceil(dataToShow.length / pageSize);

  const currentPageData = dataToShow.slice(
    (currentPage - 1) * pageSize,
    (currentPage - 1) * pageSize + pageSize
  );

  useEffect(() => {
    if (totalPages < currentPage) setCurrentPage(totalPages);
  }, [totalPages, currentPage]);

  return { currentPage, totalPages, currentPageData, setCurrentPage };
}
