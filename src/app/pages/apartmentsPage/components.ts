import { styled } from "@mui/material/styles";

export const ApartmentsPageContainer = styled("div")(
  ({ theme }) => `
width: 100%;
flex: 1 1 auto;
padding: 30px;
overflow-x: hidden;
display: flex;
gap: 80px;
justify-content: space-between;
scroll-behavior: smooth;
background-color: ${theme.palette.primary.light}
`
);

export const DisplayGroup = styled("div")`
  width: 1%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
