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

export const Feed = styled("div")(
  ({ theme }) => `
display: flex;
flex-direction: column;
width: 100%;
max-width: 1400px;
${theme.breakpoints.up("fullscreen")} {
  justify-content: space-between;
}
`
);

export const Sections = styled("div")(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  ${theme.breakpoints.down("fullscreen")} {
    flex-direction: column;
  }
`
);

export const Section = styled("div")(
  ({ theme }) => `
display: flex;
width: 100%;
`
);

export const SectionInnerLeft = styled("div")(
  ({ theme }) => `
${theme.breakpoints.down("fullscreen")} {
  margin-right: auto;
}
`
);

export const SectionInnerRight = styled("div")(
  ({ theme }) => `
${theme.breakpoints.down("fullscreen")} {
  margin-left: auto;
}
`
);

export const SectionInner = styled("div", {
  shouldForwardProp: (prop) => prop !== "dimmed",
})<{ dimmed: boolean }>(
  ({ dimmed }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  opacity:${dimmed ? "0.2" : "1"};
`
);

export const DescriptionSpan = styled("span")`
  width: 100%;
`;
