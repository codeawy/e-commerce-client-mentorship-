import { Button } from "../ui/button";

interface IProps {
  img: string;
  alt: string;
  title: string;
  subTitle: string;
  width?: string;
  height?: string;
  bg?: string;
  imgPosition: {
    bottom?: string;
    top?: string;
    left?: string;
    right?: string;
  };
  transform?: string;
}

const ImgCard = ({
  img,
  alt,
  title,
  subTitle,
  width = "w-20",
  height = "h-56",
  bg = "#000000",
  imgPosition,
  transform = "auto", // Default transform style is auto
}: IProps) => {
  // Convert imgPosition object into valid inline styles if the values exist
  const imgStyles = {
    bottom: imgPosition.bottom || "auto",
    top: imgPosition.top || "auto",
    left: imgPosition.left || "auto",
    right: imgPosition.right || "auto",
    // Apply the translate transform when top and left are specified for centering
    transform:
      (imgPosition.top || imgPosition.left) && transform === "auto"
        ? "translate(-50%, -50%)"
        : transform, // Apply custom transform if provided
  };

  console.log("Image position styles:", imgStyles);

  return (
    <div
      className={`w-full lg:${width} ${height} relative overflow-hidden`}
      style={{ backgroundColor: bg }} // Apply bg as inline style
    >
      <img
        src={img}
        alt={alt}
        style={imgStyles} // Apply image position and transform as inline styles
        className="absolute object-cover max-w-full max-h-full"
      />
      <div className="desc w-[242px] absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
        <span className="text-white text-2xl font-semibold">{title}</span>
        <p className="text-sm text-[#FAFAFA] leading-[21px]">{subTitle}</p>
        <Button
          variant="link"
          className="justify-normal p-0 font-medium text-white underline text-[16px]"
        >
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default ImgCard;
