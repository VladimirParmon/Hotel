import { Checkbox, Typography } from "@mui/material";
import { ChoicesDescriptionAction } from "app/constants/models";
import { useAppDispatch } from "app/redux/hooks";
import { ChoiceComponentContainer, TextContainer } from "./components";

interface ChoiceComponentProps {
  name: string;
  action: ChoicesDescriptionAction;
  description?: string;
  value: boolean;
}

export function ChoiceComponent({ name, description, action, value }: ChoiceComponentProps) {
  const dispatch = useAppDispatch();
  function handleChange(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
    dispatch(action(checked));
  }
  return (
    <ChoiceComponentContainer>
      <Checkbox color="secondary" onChange={handleChange} checked={value} />
      <TextContainer>
        <Typography>{name}</Typography>
        {description && (
          <Typography fontSize={"0.8rem"} color="secondary">
            {description}
          </Typography>
        )}
      </TextContainer>
    </ChoiceComponentContainer>
  );
}
