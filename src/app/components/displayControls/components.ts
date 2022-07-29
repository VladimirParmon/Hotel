import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const DisplayControlsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const SearchbarAssembly = styled("div")`
  width: 100%;
  display: flex;
  gap: 15px;
`;

export const Searchbar = styled(TextField)`
  width: 100%;
  min-width: 300px;
`;
