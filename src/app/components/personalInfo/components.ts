import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const Info = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const SpanKey = styled(Typography)`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const SpanValue = styled(Typography)`
  font-size: 1.4rem;
  font-weight: 300;
`;

export const Line = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ImagePlaceholder = styled("div")(
  ({ theme }) => `
width: 300px;
height: 400px;
border: 2px solid ${theme.palette.primary.dark};
display: flex;
justify-content: center;
align-items: center;
`
);
