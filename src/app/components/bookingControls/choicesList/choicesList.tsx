import { Divider, Typography } from "@mui/material";
import { ChoicesDescription } from "app/constants/models";
import { ChoiceComponent } from "./choiceComponent";
import { ChoicesListContainer } from "./components";

export function ChoicesList({ sectionName, choices }: ChoicesDescription) {
  return (
    <ChoicesListContainer>
      <Typography sx={{ alignSelf: "center" }}>{sectionName}</Typography>
      <Divider />
      {choices.map((choice) => (
        <ChoiceComponent
          name={choice.name}
          description={choice.description}
          key={choice.name}
          action={choice.action}
        />
      ))}
    </ChoicesListContainer>
  );
}
