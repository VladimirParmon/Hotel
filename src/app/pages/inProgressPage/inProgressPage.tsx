import { styled } from "@mui/material/styles";
import inProgress from "app/assets/inProgress.png";

const Container = styled("div")(
  ({ theme }) => `
  width: 100%;
  height: 100%;
  background-color: ${theme.palette.primary.light};
  display: flex;
  justify-content: center;
  align-items: center;
`
);

export function InProgressPage() {
  return (
    <Container>
      <img
        src={inProgress}
        alt="Work in progress"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />
    </Container>
  );
}
