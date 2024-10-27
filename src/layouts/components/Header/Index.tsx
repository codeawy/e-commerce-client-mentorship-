import Navbar from "./components/Navbar";
import { Input } from "@/components/ui/input";
import HeartIcon from "@/assets/imgs/svg/Heart.svg";
import BasketIcon from "@/assets/imgs/svg/Cart1 with buy.svg";
import Container from "@/components/common/Container";
import search from "@/assets/imgs/svg/search.svg";
const Header = () => {
  return (
    <>
      <Container>
        <header className="h-auto md:h-[38px] bg-white mt-10 flex flex-col md:flex-row justify-between items-center">
          <Navbar />
          <div className="flex items-center space-x-[24px] mt-2 md:mt-0">
            {/* Search Input */}
            <div className="relative">
              <Input
                type="text"
                placeholder="What are you looking for?"
                className="border-0 rounded-md px-2 py-1 w-48 md:w-[243px] h-[38px] bg-[#F5F5F5] placeholder:text-[12px]"
              />
              <div className="absolute left-[207px] top-1/2 transform -translate-y-1/2">
                <img src={search} alt="Search Icon" className="w-6 h-6" />
              </div>
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-4">
              <img
                src={HeartIcon}
                alt="Heart Icon"
                className="cursor-pointer h-[17.83px] w-5"
              />
              <img
                src={BasketIcon}
                alt="Basket Icon"
                className="cursor-pointer h-[17.83px] w-5"
              />
            </div>
          </div>
        </header>
      </Container>

      {/* Responsive Border Line */}
      <div
        className="border-b border-black opacity-30 mt-2 md:mt-4"
        style={{ borderWidth: "0.5px" }}
      ></div>
    </>
  );
};

export default Header;
