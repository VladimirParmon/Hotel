import Slider, { CustomArrowProps } from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { SlickArrow } from "./components";

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
      <SlickArrow onClick={onClick} style={{ right: 0 }}>
        <ChevronRightIcon />
      </SlickArrow>
    );
  }

  function PrevButton({ onClick }: CustomArrowProps) {
    return (
      <SlickArrow onClick={onClick} style={{ left: 0 }}>
        <ChevronLeftIcon />
      </SlickArrow>
    );
  }

  return (
    <Slider {...settings} className="slick-carousel__card">
      {items.map((el) => (
        <img alt={el} src={el} key={el} />
      ))}
    </Slider>
  );
}
