interface IProps {
  featureImg: string;
  title: string;
  subtitle: string;
  className?: string;
}

const Feature = ({ featureImg, subtitle, title, className }: IProps) => {
  return (
    <div
      className={`flex flex-col gap-6 items-center justify-center ${className}`}
    >
      <div className="w-20 h-20 rounded-full bg-gray-300 flex justify-center items-center">
        <div className="flex justify-center items-center bg-black rounded-full w-[58px] h-[58px]">
          <img src={featureImg} alt="" />
        </div>
      </div>
      <span className="text-xl font-semibold text-black">{title}</span>
      <p className="text-sm text-black">{subtitle}</p>
    </div>
  );
};
export default Feature;
