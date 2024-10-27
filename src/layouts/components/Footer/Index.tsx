// import { AiOutlineSend } from "react-icons/ai";
import QR from "@/assets/Images/svg/Qr Code.svg";
import appPlay from "@/assets/Images/svg/Apple_gray_logo 1.svg";
import iconFace from "@/assets/Images/svg/icon-Facebook.svg";
import iconLinked from "@/assets/Images/svg/Icon-Linkedin.svg";
import iconInsta from "@/assets/Images/svg/icon-instagram.svg";
import icontwiter from "@/assets/Images/svg/Icon-Twitter.svg";
import Container from "@/components/common/Container";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5  gap-10">
          {/* Column 1: Exclusive */}
          <div>
            <Link
              to={ROUTES.Main}
              className="text-white mb-6 inline-block md:text-lg lg:text-2xl  font-bold"
            >
              Exclusive
            </Link>
            <h3 className="mb-6 text-xl font-medium">Support</h3>
            <p className="text-[16px] font-normal normal-case">
              Get 10% off your first order
            </p>
            <div className="relative flex mt-4 items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="p-3 text-gray-500 pr-12 text-[16px] h-[48px] border-[1.5px]" // Add padding to the right for the icon
              />
              {/* <AiOutlineSend className="absolute right-3 w-6 h-6 text-white" /> */}
            </div>
          </div>

          {/* Column 2: Support */}
          <div>
            <h3 className="mb-6 text-xl font-medium">Support</h3>
            <p className="mb-4 text-[16px]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>

            <p className="mb-4 text-[16px]">support@example.com</p>
            <p className="text-[16px]">+88015-88888-9999</p>
          </div>

          {/* Column 3: Account */}
          <div>
            <h3 className="mb-6 text-xl font-medium">Account</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  my account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  login/Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  card
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  shop
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-medium">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-[16px] hover:text-gray-400">
                  privacy police
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  terms of use
                </a>
              </li>
              <li>
                <a href="#" className="text-[16px] hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[16px] hover:text-gray-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-[16px] hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Download App */}
          <div className="bg-black p-4">
            <h3 className="mb-6 text-xl font-medium text-white">
              Download App
            </h3>
            <p className="text-xs font-medium text-gray-400 mt-4">
              Save $3 with our app - new users only
            </p>

            <div className="flex   mt-4">
              <img src={QR} alt="QR" className="text-white w-20 h-20  mr-4 " />
              <div>
                <Link
                  to="#"
                  className="flex items-center border border-white rounded-lg py-1 px-2 mb-2 "
                >
                  <img
                    src={appPlay}
                    alt="Get it on Google Play"
                    className="w-6 h-6 mr-1"
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] xxl:text-sm text-white font-medium">
                      Get it on
                    </span>
                    <span className="text-white text-[10px]  2xl:text-lg">
                      Google Play
                    </span>
                  </div>
                </Link>

                <Link
                  to="#"
                  className="flex items-center border border-white rounded-lg py-1 px-2 mb-2 "
                >
                  <img
                    src={appPlay}
                    alt="Get it on Google Play"
                    className="w-6 h-6 mr-1"
                  />
                  <div className="flex flex-col">
                    <span className="text-[8px] xxl:text-sm text-white font-medium">
                      download on the
                    </span>
                    <span className="text-white text-xs 2xl:text-lg">
                      app store
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-6 flex space-x-6">
              <a href="#">
                <img
                  src={iconFace}
                  className="w-6 h-6 hover:text-gray-400 cursor-pointer"
                />
              </a>
              <a href="#">
                <img
                  src={icontwiter}
                  className="w-6 h-6 hover:text-gray-400 cursor-pointer"
                />
              </a>
              <a href="#">
                <img
                  src={iconInsta}
                  className="w-6 h-6 hover:text-gray-400 cursor-pointer"
                />
              </a>
              <a href="#">
                <img
                  src={iconLinked}
                  className="w-6 h-6 hover:text-gray-400 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright Section */}
      <div className=" text-center py-4 mt-8 border-t border-gray-800">
        <p className="text-sm text-gray-600">
          &copy;Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
