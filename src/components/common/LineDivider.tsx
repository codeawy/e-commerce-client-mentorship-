import { cn } from "@/lib/utils";

interface IProps {
  classesName?: string;
}
const LineDivider = ({ classesName }: IProps) => {
  return (
    <div className={cn("w-full h-[0.5px] bg-black mb-20", classesName)}></div>
  );
};
export default LineDivider;
