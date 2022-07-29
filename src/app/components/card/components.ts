import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const CardContainer = styled(Paper)`
  width: 23%;
`;

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
