import { ReactNode, forwardRef } from "react";
import { Swiper, SwiperRef } from "swiper/react"; // Import Swiper and SwiperRef from react
import { Pagination, Autoplay, Navigation } from "swiper/modules"; // Import necessary modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../components/styles.css"; // Custom styles

interface SliderProps {
  spaceBetween?: number;
  slidesPerView?: number;
  children?: ReactNode;
  classes?: string;
  breakpoints?: {
    [key: number]: {
      slidesPerView?: number;
      spaceBetween?: number;
    };
  };
  showPagination?: boolean;
  showNavigation?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  direction?: "horizontal" | "vertical";
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
  navigation?: { nextEl: string; prevEl: string };
}

const Slider = forwardRef<SwiperRef, SliderProps>(
  (
    {
      spaceBetween = 0,
      slidesPerView = 1,
      children,
      classes = "",
      breakpoints,
      showPagination = true,
      showNavigation = false,
      autoplay = false,
      autoplayDelay = 3000,
      direction = "horizontal",
      effect = "slide",
      navigation,
    },
    ref
  ) => {
    return (
      <Swiper
        ref={ref}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={showPagination ? { clickable: true } : false}
        navigation={showNavigation && navigation ? navigation : false}
        autoplay={autoplay ? { delay: autoplayDelay } : false}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        className={`default-swiper-class ${classes}`}
        direction={direction}
        effect={effect}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    );
  }
);

Slider.displayName = "Slider"; // For debugging

export default Slider;
