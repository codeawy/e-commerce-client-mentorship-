import { categories } from "@/data/products";
import { ICategory } from "@/interfaces/product";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const MenuItem = React.memo(({ category }: { category: ICategory }) => (
  <li className="flex gap-4 font-normal text-base items-center justify-between hover:cursor-pointer">
    {category.name}
    {category.dropDown && <FiChevronRight className="w-6 h-6 cursor-pointer" />}
  </li>
));

interface ILeftSideMenuProps {
  className?: string;
}

const LeftSideMenu: React.FC<ILeftSideMenuProps> = ({ className }) => {
  return (
    <>
      {/* Full menu for large screens */}
      <aside
        className={`hidden lg:block relative h-full w-[217px]  bg-white text-black ${className}`}
      >
        <ul className="flex flex-col justify-between h-full">
          {categories.map((category, index) => (
            <MenuItem key={index} category={category} />
          ))}
        </ul>
        <div
          className="absolute top-[-40px] right-[-16px] w-[.5px] bg-black opacity-[30%]"
          style={{ height: `calc(100% + 40px)` }}
        ></div>
      </aside>

      {/* Small and medium screens: show only icons */}
      <aside className="flex lg:hidden relative h-full w-[50px]  bg-white text-black flex-col items-center">
        <ul className="flex flex-col gap-6">
          {categories.map((category, index) => (
            <li
              key={index}
              className="flex items-center justify-center hover:cursor-pointer"
            >
              {category.icon} {/* Icons only */}
            </li>
          ))}
        </ul>
        <div
          className="absolute top-[-40px] right-0 w-[.5px] bg-black opacity-[30%]"
          style={{ height: `calc(100% + 40px)` }}
        ></div>
      </aside>
    </>
  );
};

export default LeftSideMenu;
