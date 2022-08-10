import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const CardContainer = styled(Paper)(
  ({ theme }) => `
width: 340px;
height: auto;
cursor: pointer;
box-sizing: border-box !important;

&:hover {
  border-bottom: 2px solid ${theme.palette.secondary.main};
}

${theme.breakpoints.down("fullscreen")} {
  width: 31%;
}
${theme.breakpoints.down("mediumScreen")} {
  width: 47%;
}
${theme.breakpoints.down("smallScreen")} {
  width: 99%;
}
`
);

export const CardContainerNonAdaptive = styled(Paper)(
  ({ theme }) => `
width: 330px;
height: auto;
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
