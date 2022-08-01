import { styled } from "@mui/material/styles";

export const PageContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${theme.palette.primary.light};
  flex: 1 1 auto;
  overflow-x: hidden;
  height: fit-content;
  padding: 30px;
`
);

export const HugeScreensBoundary = styled("div")`
  max-width: 1920px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

export const CarouselContainer = styled("div")(
  ({ theme }) => `
width: 100%;
height: auto;
max-width: 1450px;
max-height: 720px;
margin-bottom: 60px;

& * {
  max-height: inherit;
}
`
);
