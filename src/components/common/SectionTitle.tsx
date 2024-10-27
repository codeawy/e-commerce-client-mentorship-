interface IProps {
  subTitle: string;
  title: string;
}
const SectionTitle = ({ subTitle, title }: IProps) => {
  return (
    <div>
      <div className="flex gap-[10px] items-center mb-6">
        <div className="w-5 h-10 rounded-sm bg-secondary2"></div>
        <span className="text-secondary2 font-semibold text-[16px]">
          {subTitle}
        </span>
      </div>
      <div className="font-semibold text-3xl ">{title}</div>
    </div>
  );
};

export default SectionTitle;
