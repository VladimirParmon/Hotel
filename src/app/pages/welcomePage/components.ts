import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const WelcomePageContainer = styled("div")`
  flex: 1 1 auto;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const GreetingForm = styled(Paper)(
  ({ theme }) => `
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;
height: 100%;
max-width: 350px;
height: 510px;
padding: 15px;
${theme.breakpoints.up("wideScreen")} {
  transform: translateX(-100%);
}
`
);

export const GreetingSpan = styled("span")`
  display: block;
  position: relative;
  font-size: 1.7rem;
`;

export const DatePickers = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const ButtonsContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;
