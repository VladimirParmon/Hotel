import { InputAdornment, TextField } from "@mui/material";
import { SortingOptions, SortingOrder } from "app/constants/enums";
import SearchIcon from "@mui/icons-material/Search";
import Selector from "../selector";
import "./style.scss";
import {
  apartmentType,
  beds,
  floors,
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
      <Selector label={"Floor"} options={floors} />
      <Selector label={"Beds amount"} options={beds} />
      <Selector label={"Apartment type"} options={apartmentType} />
      <Selector label={"Visitors rating"} options={ratings} />
      <ChoiceComponent name="Has reviews" />
    </div>
  );
}
