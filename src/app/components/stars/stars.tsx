import { Filling, Outline, SingleStar, StarsContainer } from "./components";
import StarIcon from "@mui/icons-material/Star";

interface StarsProps {
  starSize: number;
  rating: number;
}

export function Stars({ starSize, rating }: StarsProps) {
  function getStars() {
    const fullStars = Math.floor(rating);
    const float = rating - fullStars;
    return Array.from(Array.from({ length: 5 }, (_, i) => i + 1)).map((el) => {
      if (el <= fullStars) return 100;
      if (el - 1 === fullStars) return getWidth(float);
      return 0;
    });
  }
  function getWidth(float: number) {
    return float * 100;
  }
  return (
    <StarsContainer>
      {getStars().map((width, i) => (
        <SingleStar key={i} style={{ width: `${starSize}px`, height: `${starSize}px` }}>
          <Outline color="secondary" />
          <Filling style={{ width: `${width}%` }}>
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
