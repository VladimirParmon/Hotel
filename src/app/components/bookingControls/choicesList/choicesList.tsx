import { Divider, Typography } from "@mui/material";
import { ChoicesDescription } from "app/constants/models";
import { ChoiceComponent } from "./choiceComponent";

export function ChoicesList({ sectionName, choices }: ChoicesDescription) {
  return (
    <div className="choices-list">
      <Typography sx={{ alignSelf: "center" }}>{sectionName}</Typography>
      <Divider />
      {choices.map((choice) => (
        <ChoiceComponent name={choice.name} description={choice.description} key={choice.name} />
      ))}
    </div>
  );
}
