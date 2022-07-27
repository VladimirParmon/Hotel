import { Checkbox, Typography } from "@mui/material";
import { ChoicesDescriptionAction } from "app/constants/models";
import { useAppDispatch } from "app/redux/hooks";

interface ChoiceComponentProps {
  name: string;
  action: ChoicesDescriptionAction;
  description?: string;
}

export function ChoiceComponent({ name, description, action }: ChoiceComponentProps) {
  const dispatch = useAppDispatch();
  function handleChange(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
    dispatch(action(checked));
  }
  return (
    <div className="choice-component">
      <Checkbox color="secondary" onChange={handleChange} />
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
