import { oneDayMs } from "app/constants/constants";
import { FiltersRange } from "app/constants/models";

interface getPriceProps {
  date: FiltersRange;
  price: number;
}

export function getPrice({ date, price }: getPriceProps) {
  function getDaysOfStay() {
    const difference = date.to - date.from;
    return Math.ceil(difference / oneDayMs);
  }

  const daysOfStay = getDaysOfStay();
  const rawPrice = price;
  const fullPrice = price * daysOfStay;
  const tip = 300;
  const discount = (rawPrice + tip) / 10;
  const totalPrice = rawPrice + tip - discount;

  return {
    rawPrice,
    fullPrice,
    daysOfStay,
    tip,
    discount,
    totalPrice,
  };
}
