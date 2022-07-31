import { styled } from "@mui/material/styles";

export const Description = styled("div")(
  ({ theme }) => `
width: 100%;
display: flex;
gap: 30px;
${theme.breakpoints.down("tablets")} {
  flex-wrap: wrap;
}
`
);

export const Section = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`;
