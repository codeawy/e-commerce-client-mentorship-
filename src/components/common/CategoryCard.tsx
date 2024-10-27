import React from "react";
import { Card } from "../ui/card";

interface IProps {
  categoryIcon: React.ReactNode;
  categoryName: string;
}

const CategoryCard = ({ categoryIcon, categoryName }: IProps) => {
  return (
    <Card className="w-[170px] h-[145px] flex flex-col justify-center items-center gap-4 border border-gray-500 rounded-sm hover:bg-secondary2 transition cursor-pointer group">
      <div className="w-14 h-14 flex items-center justify-center">
        {React.cloneElement(categoryIcon as React.ReactElement, {
          className:
            "w-14 h-14 font-normal text-black transition duration-200 ease-in-out group-hover:text-white",
        })}
      </div>

      <span className="text-[16px] text-black transition duration-200 ease-in-out group-hover:text-white">
        {categoryName}
      </span>
    </Card>
  );
};

export default CategoryCard;
