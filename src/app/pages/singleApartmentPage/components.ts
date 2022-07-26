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
max-height: 728px;
${theme.breakpoints.up("smallScreen")} {
  margin-bottom: 80px;
};

& * {
  max-height: inherit;
}
`
);

export const RatingAndType = styled("div")(
  ({ theme }) => `
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`
);

export const RatingSpan = styled("span")(
  ({ theme }) => `
  font-size: 2rem;
  ${theme.breakpoints.down("smallerDescription")} {
    display: none;
  }
`
);

export const TypeSpan = styled("span")(
  ({ theme }) => `
  margin-right: 10px; 
  font-size: 2rem;
  ${theme.breakpoints.down("smallerDescription")} {
    font-size: 1.5rem;
  }
`
);
