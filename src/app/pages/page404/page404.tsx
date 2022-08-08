import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled("div")(
  ({ theme }) => `
  width: 100%;
  height: 100%;
  background-color: ${theme.palette.primary.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
);

export function Page404() {
  return (
    <Container>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Page not found</Typography>
    </Container>
  );
}
