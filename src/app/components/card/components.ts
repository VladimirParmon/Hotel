import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const CardContainer = styled(Paper)(
  ({ theme }) => `
width: 340px;
height: 400px;
cursor: pointer;
box-sizing: border-box !important;

&:hover {
  border-bottom: 2px solid ${theme.palette.secondary.main};
}
`
);

export const CardInner = styled("div")`
  padding: 5px 15px 15px 15px;
`;

export const CardReviews = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const CardDescription = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
