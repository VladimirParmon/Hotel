import { styled } from "@mui/material/styles";
import { Slider } from "@mui/material";

export const PriceRangeContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const Inputs = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 7px;

  .MuiInputAdornment-root {
    p {
      transform: translateY(1px);
    }
  }
`;

export const PriceSlider = styled(Slider)(
  ({ theme }) => `
  width: 92% !important;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 20px;

  & *:not(span) {
    background-color: ${theme.palette.primary.dark};
  }
`
);
