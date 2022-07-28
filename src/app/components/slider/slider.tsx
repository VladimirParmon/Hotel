import Slider, { CustomArrowProps } from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./style.scss";

interface SliderComponentProps {
  items: string[];
}

export function SliderComponent({ items }: SliderComponentProps) {
  const settings = {
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function NextButton({ onClick }: CustomArrowProps) {
    return (
      <button className="slick-arrow slick-arrow_next" onClick={onClick}>
        <ChevronRightIcon />
      </button>
    );
  }

  function PrevButton({ onClick }: CustomArrowProps) {
    return (
      <button className="slick-arrow slick-arrow_previous" onClick={onClick}>
        <ChevronLeftIcon />
      </button>
    );
  }

  return (
    <Slider {...settings}>
      {items.map((el) => (
        <img alt={el} src={el} key={el} />
      ))}
    </Slider>
  );
}
