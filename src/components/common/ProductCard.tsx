import React from "react";
import { Star, Heart, Eye } from "lucide-react";
import { Card, CardContent } from "../ui/card";

// Define the prop types for the component
export interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
  prePrice?: number;
  ratingPercentage: number; // Rating percentage (between 0-100)
  discount?: string;
  new?: boolean;
  colors?: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  prePrice,
  ratingPercentage,
  discount,
  new: isNew,
  colors,
}) => {
  const totalStars = 5;

  // Calculate the number of filled stars based on the rating percentage
  const filledStars = Math.floor(ratingPercentage / 20); // Divide by 20 to map 0-100% into 0-5 stars

  return (
    <Card className="w-auto md:w-[270px] h-[380px] shadow-none border-none flex flex-col">
      {/* Top Section */}
      <div className="w-[270px] h-[250px] flex flex-col bg-[#F5F5F5] relative rounded-t-lg p-0">
        {/* Conditional rendering for discount or new badge */}
        {discount && (
          <div className="absolute top-3 left-3 bg-secondary2 text-white text-xs font-medium w-[55px] h-[26px] flex items-center justify-center rounded">
            {discount}
          </div>
        )}
        {isNew && (
          <div className="absolute top-3 left-3 bg-customGreen text-white text-xs font-medium w-[55px] h-[26px] flex items-center justify-center rounded">
            New
          </div>
        )}

        {/* Icons on Top Right */}
        <div className="absolute bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center top-3 right-3">
          <Heart className="w-5 h-5 text-black cursor-pointer" />
        </div>
        <div className="absolute bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center top-[54px] right-3">
          <Eye className="w-5 h-5 text-black cursor-pointer" />
        </div>

        {/* Centered Image */}
        <div className="flex-grow flex items-center justify-center">
          <img src={imageUrl} alt="Product" className="w-[172px] h-[152px]" />
        </div>

        {/* Add to Cart Button - At the End of Card Header */}
        <button className="bg-black text-white text-sm font-semibold py-2 px-0 w-full rounded-bl-lg rounded-br-lg border-l border-b border-r border-gray-300 mt-auto">
          Add to Cart
        </button>
      </div>

      {/* Bottom Section */}
      <CardContent className="flex flex-col gap-2 mt-4 justify-center p-0">
        <h3 className="text-[16px] font-medium text-black">{title}</h3>
        <div className={colors ? "flex flex-row gap-2" : "flex flex-col gap-2"}>
          <p className="text-[16px] font-medium flex gap-3">
            <span className="text-secondary2">${price}</span>
            {prePrice && (
              <span className="text-gray-500 line-through">${prePrice}</span>
            )}
          </p>

          {/* Star Rating */}
          <div className="flex gap-2 items-center">
            <div className="flex items-center">
              {Array.from({ length: totalStars }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < filledStars ? "text-yellow-500" : "text-gray-300"
                  }`}
                  fill={i < filledStars ? "#f59e0b" : "#d1d5db"} // Full fill yellow or gray based on rating percentage
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-500">
              ({ratingPercentage}%)
            </span>
          </div>
        </div>

        <div className="colors flex gap-2">
          {colors?.map((ele, index) => {
            return (
              <div
                key={index}
                className={`w-5 h-5 rounded-full bg-${ele}`}
              ></div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
