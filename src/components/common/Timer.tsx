interface ITimeUnit {
  label: string;
  value: string;
}

interface IProps {
  timeUnits?: ITimeUnit[];
  separator?: string;
  classesName?: string;
  labelClassName?: string;
  valueClassName?: string;
}

const Timer = ({
  timeUnits = [
    { label: "days", value: "03" },
    { label: "hours", value: "14" },
    { label: "minutes", value: "45" },
    { label: "seconds", value: "59" },
  ],
  separator = ":",
  classesName = "",
  labelClassName = "font-medium text-xs leading-[18px]",
  valueClassName = "font-inter font-bold text-[32px] leading-[30px]",
}: IProps) => {
  return (
    <div className={`flex ${classesName}`}>
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center mx-2">
            <span className={labelClassName}>{unit.label}</span>
            <span className={valueClassName}>
              {unit.value.padStart(2, "0")}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="mx-1 text-hoverButton font-bold">{separator}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timer;
