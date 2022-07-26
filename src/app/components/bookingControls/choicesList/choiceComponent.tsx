import { Checkbox, Typography } from "@mui/material";

interface ChoiceComponentProps {
  name: string;
  description?: string;
}

export function ChoiceComponent({ name, description }: ChoiceComponentProps) {
  return (
    <div className="choice-component">
      <Checkbox color="secondary" />
      <div className="choice-component__text">
        <Typography>{name}</Typography>
        {description && (
          <Typography fontSize={"0.8rem"} color="secondary">
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
}
