import { Filling, Outline, SingleStar, StarsContainer } from "./components";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

interface StarsProps {
  starSize: number;
  starState: number;
  setStarState: React.Dispatch<React.SetStateAction<number>>;
}

export function RatingSelector({ starSize, starState, setStarState }: StarsProps) {
  const [hoverState, setHoverState] = useState(-1);

  return (
    <StarsContainer>
      {Array.from(Array(5).keys()).map((i) => (
        <SingleStar
          key={i}
          style={{ width: `${starSize}px`, height: `${starSize}px` }}
          onMouseEnter={() => setHoverState(i)}
          onMouseLeave={() => setHoverState(starState)}
          onClick={() => setStarState(i)}
        >
          <Outline color="secondary" />
          <Filling style={{ opacity: hoverState < i ? "0" : "1" }}>
            <StarIcon
              color="secondary"
              style={{ width: `${starSize}px`, height: `${starSize}px` }}
            />
          </Filling>
        </SingleStar>
      ))}
    </StarsContainer>
  );
}
