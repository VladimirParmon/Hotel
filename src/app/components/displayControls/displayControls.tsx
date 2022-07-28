import { InputAdornment, TextField } from "@mui/material";
import { SortingOptions, SortingOrder } from "app/constants/enums";
import SearchIcon from "@mui/icons-material/Search";
import Selector from "../selector";
import "./style.scss";
import {
  apartmentType,
  beds,
  floors,
  itemsPerPage,
  ratings,
  sortingOptions,
  sortingOrder,
} from "app/constants/constants";
import { ChoiceComponent } from "../bookingControls/choicesList/choiceComponent";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "app/redux/hooks";
import {
  sortUsingNumber,
  sortUsingPopularity,
  sortUsingPrice,
  sortUsingRating,
} from "app/redux/apartmentsSlice";
import { SelectorWithoutState } from "../selector/selectorWithoutState";
import {
  updateFiltersBedsAmount,
  updateFiltersFloor,
  updateFiltersHasReviews,
  updateFiltersItemsPerPage,
  updateFiltersRating,
  updateFiltersType,
} from "app/redux/filtersSlice";

export function DisplayControls() {
  const [sortingOptionsState, setSortingOptionsState] = useState(sortingOptions[0]);
  const [sortingOrderState, setSortingOrderState] = useState(sortingOrder[0]);
  const dispatch = useAppDispatch();

  const handleOptionsAndOrderChange = useCallback(() => {
    switch (sortingOptionsState) {
      case SortingOptions.POPULARITY:
        dispatch(sortUsingPopularity(sortingOrderState));
        break;
      case SortingOptions.NUMBER:
        dispatch(sortUsingNumber(sortingOrderState));
        break;
      case SortingOptions.PRICE:
        dispatch(sortUsingPrice(sortingOrderState));
        break;
      case SortingOptions.RATING:
        dispatch(sortUsingRating(sortingOrderState));
        break;
    }
  }, [sortingOptionsState, sortingOrderState, dispatch]);

  useEffect(() => {
    handleOptionsAndOrderChange();
  }, [sortingOptionsState, sortingOrderState, handleOptionsAndOrderChange]);

  return (
    <div className="display-controls">
      <div className="display-controls__searchbar-assembly">
        <TextField
          name="searchbar"
          color="secondary"
          placeholder="Search through apartments..."
          className="display-controls__searchbar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <SelectorWithoutState
          label={SortingOptions.LABEL}
          options={sortingOptions}
          value={sortingOptionsState}
          setValue={setSortingOptionsState}
        />
        <SelectorWithoutState
          label={SortingOrder.LABEL}
          options={sortingOrder}
          value={sortingOrderState}
          setValue={setSortingOrderState}
        />
        <Selector
          label={"Items per page"}
          options={itemsPerPage}
          action={updateFiltersItemsPerPage}
        />
      </div>
      <Selector label={"Floor"} options={floors} action={updateFiltersFloor} />
      <Selector label={"Beds amount"} options={beds} action={updateFiltersBedsAmount} />
      <Selector label={"Apartment type"} options={apartmentType} action={updateFiltersType} />
      <Selector label={"Visitors rating"} options={ratings} action={updateFiltersRating} />
      <ChoiceComponent name="Has reviews" action={updateFiltersHasReviews} />
    </div>
  );
}
