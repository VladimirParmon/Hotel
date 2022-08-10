import { Typography } from "@mui/material";
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
gap: 30px;
width: 100%;
max-width: 1450px;
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
  gap: 10px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  opacity:${dimmed ? "0.2" : "1"};
`
);

export const DescriptionSpan = styled(Typography)`
  font-size: 1rem;
  line-height: 2.5rem;
  font-weight: 300;
  width: 100%;
`;

export const SectionHeading = styled(Typography)`
  text-align: center;
  margin-bottom: 20px;
`;

export const NoticeContainer = styled("div")`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Notice = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: center;
  justify-items: center;
  width: 100%;
  max-width: 450px;
`;
