import StarBorderIcon from "@mui/icons-material/StarBorder";
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
    <div className="stars">
      {getStars().map((width, i) => (
        <div
          key={i}
          className="stars__single-star"
          style={{ width: `${starSize}px`, height: `${starSize}px` }}
        >
          <StarBorderIcon className="stars__outline" color="secondary" />
          <div className="stars__filling-container" style={{ width: `${width}%` }}>
            <StarIcon
              color="secondary"
              className="stars__filling"
              style={{ width: `${starSize}px`, height: `${starSize}px` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
