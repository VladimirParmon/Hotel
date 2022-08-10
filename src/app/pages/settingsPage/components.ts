import { styled } from "@mui/material/styles";

export const PageContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.palette.primary.light};
  flex: 1 1 auto;
  overflow-x: hidden;
  height: fit-content;
  padding: 30px;
`
);
