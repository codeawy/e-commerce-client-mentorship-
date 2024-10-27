import Container from "@/components/common/Container";
import LeftSideMenu from "@/layouts/components/LeftSideMenu/Index";
import appleIcon from "@/assets/imgs/svg/Apple_gray_logo 1.svg";
import slider1 from "@/assets/imgs/jpeg/slider1.jpeg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Slider from "./components/Slider";
import SectionTitle from "@/components/common/SectionTitle";
import Timer from "@/components/common/Timer";
import ProductCard, { ProductCardProps } from "@/components/common/ProductCard";
import playStation from "@/assets/imgs/png/playStation.png";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/common/CategoryCard";
import product1 from "@/assets/imgs/png/product1.png";
import product2 from "@/assets/imgs/png/product2.png";
import product3 from "@/assets/imgs/png/product3.png";
import product4 from "@/assets/imgs/png/product4.png";
import LineDivider from "@/components/common/LineDivider";
import headphone from "@/assets/imgs/png/headphone.png";
import women from "@/assets/imgs/png/attractive-woman-wearing-hat-posing-black-background 1.png";
import speaker from "@/assets/imgs/png/speaker1.png";
import palyStation from "@/assets/imgs/png/newArrival1.png";
import cuchi from "@/assets/imgs/png/cucci.png";
import van from "@/assets/imgs/svg/van.svg";
import right from "@/assets/imgs/svg/right.svg";
import headphones from "@/assets/imgs/svg/headphone.svg";
import { SwiperSlide } from "swiper/react";
import ImgCard from "@/components/common/ImgCard";
import { categories } from "@/data/products";
import Feature from "@/components/common/Feature";

interface mainSlideContent {
  title: string;
  subtitle: string;
  buttonLabel: string;
  imageUrl: string;
  icon: string;
}
const Home = () => {
  const mainSlides: mainSlideContent[] = [
    {
      title: "iPhone 14 Series",
      subtitle: "Up to 10% off voucher",
      buttonLabel: "Shop now",
      imageUrl: slider1,
      icon: appleIcon,
    },
    {
      title: "MacBook Air",
      subtitle: "Save 15% this week",
      buttonLabel: "Shop now",
      imageUrl: slider1,
      icon: appleIcon,
    },
    // Add more slides here
  ];
  const productSlides: ProductCardProps[] = [
    {
      imageUrl: playStation,
      title: "HAVIT HV-G92 Gamepad",
      price: 234,
      prePrice: 560,
      ratingPercentage: 90,
      discount: "20%",
      new: true,
      colors: [],
    },
    {
      imageUrl: playStation,
      title: "HAVIT HV-G92 Gamepad",
      price: 234,
      prePrice: 560,
      ratingPercentage: 90,
      discount: "20%",
      new: true,
      colors: [],
    },
    {
      imageUrl: playStation,
      title: "HAVIT HV-G92 Gamepad",
      price: 234,
      prePrice: 560,
      ratingPercentage: 90,
      discount: "20%",
      new: true,
      colors: [],
    },
    {
      imageUrl: playStation,
      title: "HAVIT HV-G92 Gamepad",
      price: 234,
      prePrice: 560,
      ratingPercentage: 90,
      discount: "20%",
      new: true,
      colors: [],
    },
    {
      imageUrl: playStation,
      title: "HAVIT HV-G92 Gamepad",
      price: 234,
      prePrice: 560,
      ratingPercentage: 90,
      discount: "20%",
      new: true,
      colors: [],
    },
  ];

  const bestProducts = [
    {
      id: "1",
      img: product1,
      title: "The north coat",
      price: 240,
      ratingPercentage: 50,
    },
    {
      id: "2",
      img: product2,
      title: "Gucci duffle bag",
      price: 1840,
      ratingPercentage: 88,
    },
    {
      id: "3",
      img: product3,
      title: "The north coat",
      price: 230,
      ratingPercentage: 70,
    },
    {
      id: "4",
      img: product4,
      title: "Gucci duffle bag",
      price: 450,
      ratingPercentage: 76,
    },
  ];

  const features = [
    { id: "0", img: van, title: "title1", Subtitle: "subtitle1" },
    {
      id: "1",
      img: right,
      title: "title2",
      Subtitle: "subtitle2  ",
    },
    { id: "2", img: headphones, title: "title3", Subtitle: "subtitle3" },
  ];
  return (
    <div className="main w-full h-full overflow-hidden">
      <Container>
        <section className="intro">
          <div className="flex gap-1  md:gap-[61px] w-full lg:h-[344px] mt-10 mb-[140px]">
            <LeftSideMenu className="w-[217px] flex-shrink-0" />

            <div className="flex-1 overflow-hidden">
              <Slider
                classes="slider-container h-full lg:h-[344px] "
                showNavigation={false}
              >
                {mainSlides.map((slide, index) => (
                  <SwiperSlide key={index} className="swiper-slide-custom">
                    <div className="bg-black w-full h-full flex flex-col lg:flex-row justify-center lg:justify-normal  lg:gap-14 items-center pl-8 md:pl-16 relative overflow-hidden">
                      {/* Slide Content */}
                      <div className="flex flex-col pt-2 lg:pt-0 justify-center md:justify-normal gap-2 lg:gap-5">
                        <div className="title flex items-center gap-6">
                          <img
                            src={slide.icon}
                            className="w-10 h-[49px]"
                            alt="Icon"
                          />
                          <span className="text-white text-base">
                            {slide.title}
                          </span>
                        </div>
                        <div className="font-inter text-white sm:text-lg md:text-[20px] xl:text-[48px] leading-normal lg:leading-[40px] font-semibold lg:leading-[60px] normal-case">
                          {slide.subtitle}
                        </div>

                        <Button
                          variant="link"
                          className="text-white text-base underline flex items-center justify-start gap-3 pl-0"
                        >
                          {slide.buttonLabel}
                          <FiArrowRight className="mr-2 w-6 h-6" />
                        </Button>
                      </div>

                      {/* Slide Image */}
                      <div className="mt-4  lg:w-[496px] lg:h-[352px] flex-shrink-0 flex items-end justify-end">
                        <img
                          src={slide.imageUrl}
                          className="max-w-full h-auto object-cover"
                          alt="Slider"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section className="today">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-start md:items-center mb-10 relative">
            <SectionTitle subTitle="Today" title="Flash Sales" />
            <Timer classesName="md:self-end md:ml-[87px]" />

            <div className="mt-4 self-end ml-auto flex items-center gap-2">
              <button
                id="flash-sale-prev"
                className="swiper-button-prev swiper-button-black"
              >
                <FiArrowLeft className="w-4 h-4 cursor-pointer" />
              </button>
              <button
                id="flash-sale-next"
                className="swiper-button-next swiper-button-black"
              >
                <FiArrowRight className="w-4 h-4 cursor-pointer" />
              </button>
            </div>
          </div>

          <Slider
            slidesPerView={4.5}
            breakpoints={{
              100: { slidesPerView: 1 },
              320: { slidesPerView: 1 },
              400: { slidesPerView: 1.25 },
              480: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
              1270: { slidesPerView: 4 },
              1440: { slidesPerView: 4.5 },
            }}
            showPagination={false}
            showNavigation={true}
            navigation={{
              prevEl: "#flash-sale-prev",
              nextEl: "#flash-sale-next",
            }}
          >
            {productSlides.map((slide, i) => (
              <SwiperSlide key={i}>
                <ProductCard
                  imageUrl={slide.imageUrl}
                  title={slide.title}
                  price={slide.price}
                  prePrice={slide.prePrice}
                  ratingPercentage={slide.ratingPercentage}
                  discount={slide.discount}
                />
              </SwiperSlide>
            ))}
          </Slider>

          <div className="flex justify-center">
            <Button className="bg-secondary2 hover:bg-hoverButton text-white rounded-sm py-4 px-12 mb-[60px]">
              View All Products
            </Button>
          </div>

          <LineDivider />
        </section>

        <section className="categories">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-start md:items-center mb-10 relative">
            <SectionTitle subTitle="Categories" title="Browse by Category" />
            <div className="self-end ml-auto flex items-center gap-2">
              <button
                id="categories-prev"
                className="swiper-button-prev swiper-button-black"
              >
                <FiArrowLeft className="w-4 h-4 cursor-pointer" />
              </button>
              <button
                id="categories-next"
                className="swiper-button-next swiper-button-black"
              >
                <FiArrowRight className="w-4 h-4 cursor-pointer" />
              </button>
            </div>
          </div>

          <Slider
            slidesPerView={6}
            breakpoints={{
              100: { slidesPerView: 1 },
              320: { slidesPerView: 1.5 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
              1440: { slidesPerView: 6 },
            }}
            showPagination={false}
            showNavigation={true}
            navigation={{
              prevEl: "#categories-prev",
              nextEl: "#categories-next",
            }}
          >
            {categories.map((ele, i) => (
              <SwiperSlide key={i}>
                <CategoryCard categoryIcon={ele.icon} categoryName={ele.name} />
              </SwiperSlide>
            ))}
          </Slider>

          <LineDivider classesName="mt-[70px]" />
        </section>

        <section className="thisMonth">
          <div className="flex justify-between">
            <SectionTitle subTitle="this month" title="best selling product" />
            <Button className="bg-secondary2 hover:bg-hoverButton text-white rounded-sm py-4 px-12 mb-[60px]">
              view all
            </Button>
          </div>
          <div className="flex gap-[30px] flex-wrap mt-[60px] mb-[140px] justify-center md:justify-normal items-center">
            {bestProducts.map((ele) => {
              return (
                <ProductCard
                  key={ele.id}
                  imageUrl={ele.img}
                  title={ele.title}
                  price={ele.price}
                  ratingPercentage={ele.ratingPercentage}
                />
              );
            })}
          </div>

          <div className="w-full h-auto lg:h-[500px] bg-black px-3 py-3 lg:px-[57px] lg:py-0 mb-[71px] flex flex-col gap-[27px] lg:flex-row justify-center md:justify-normal md:items-center ">
            <div className="desc flex gap-8 flex-col ">
              <h3 className="text-customGreen text-[16px] font-semibold">
                categories
              </h3>
              <p className="text-5xl font-semibold text-[#FAFAFA] leading-[60px] font-inter">
                Enhance Your Music Experience
              </p>
              <div className="flex gap-6 flex-wrap">
                <div className="bg-white w-[62px] h-[62px] rounded-[50%] flex  flex-col items-center justify-center">
                  <span className="text-[16] font-semibold">23</span>
                  <span className="text-[11px]">Hours</span>
                </div>
                <div className="bg-white w-[62px] h-[62px] rounded-[50%] flex  flex-col items-center justify-center">
                  <span className="text-[16] font-semibold">23</span>
                  <span className="text-[11px]">days</span>
                </div>
                <div className="bg-white w-[62px] h-[62px] rounded-[50%] flex  flex-col items-center justify-center">
                  <span className="text-[16] font-semibold">23</span>
                  <span className="text-[11px]">minutes</span>
                </div>
                <div className="bg-white w-[62px] h-[62px] rounded-[50%] flex  flex-col items-center justify-center">
                  <span className="text-[16] font-semibold">23</span>
                  <span className="text-[11px]">seconds</span>
                </div>
              </div>
              <Button className="text-[16px] font-medium bg-customGreen  text-white border border-white rounded-sm py-4 px-12 w-auto self-start">
                buy now
              </Button>
            </div>
            <div className="w-full md:w-[600px] h-auto md:h-[420px] flex-shrink-0">
              <img
                src={headphone}
                alt="headphone"
                className="w-full h-full object-contain max-w-full"
              />
            </div>
          </div>
        </section>

        <section className="ourProducts mb-10 lg:mb-[140px] text-center">
          <div className="flex justify-between">
            <SectionTitle subTitle="our products" title="explore our product" />
          </div>
          <div className="flex gap-[30px] flex-wrap mt-[60px]  justify-center">
            {bestProducts.map((ele) => {
              return (
                <ProductCard
                  key={ele.id}
                  imageUrl={ele.img}
                  title={ele.title}
                  price={ele.price}
                  ratingPercentage={ele.ratingPercentage}
                  new
                  colors={["red-500", "blue-700"]}
                />
              );
            })}
          </div>
          <Button className=" m-auto bg-secondary2 hover:bg-hoverButton text-white rounded-sm py-4 px-12 mb-[60px]">
            view all product
          </Button>
        </section>

        <section className="featured">
          <SectionTitle subTitle="featured" title="new arrival" />
          <div className="mt-[60px] mb-[140px] flex gap-[30px] flex-col lg:flex-row">
            <ImgCard
              img={palyStation}
              alt="play station"
              title="play station5"
              subTitle="Black and White version of the PS5 coming out on sale."
              width="w-2/4"
              height="h-[600px]"
              imgPosition={{ bottom: "0px" }}
            />

            <div className="w-full lg:w-2/4 flex flex-col gap-8">
              <ImgCard
                img={women}
                bg="#0D0D0D"
                alt="new arrival"
                title="new arrival"
                subTitle="Black and White version of the PS5 coming out on sale."
                width="w-full"
                height="h-[284px]"
                imgPosition={{ right: "0px" }}
              />

              <div className="flex gap-[30px]">
                <ImgCard
                  img={speaker}
                  alt="new arrival"
                  title="speaker"
                  subTitle="Black and White version of the PS5 coming out on sale."
                  width="w-1/2"
                  height="h-[284px]"
                  imgPosition={{
                    top: "50%",
                    left: "50%",
                  }}
                />
                <ImgCard
                  img={cuchi}
                  alt="new arrival"
                  title="cuchi"
                  subTitle="Black and White version of the PS5 coming out on sale."
                  width="w-1/2"
                  height="h-[284px]"
                  imgPosition={{
                    top: "50%",
                    left: "50%",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-[88px] justify-center flex-wrap  mb-[140px]">
            {features.map((ele, i) => {
              return (
                <Feature
                  key={i}
                  featureImg={ele.img}
                  title={ele.title}
                  subtitle={ele.Subtitle}
                  className="w-full md:w-1/2 lg:w-1/5"
                />
              );
            })}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Home;
