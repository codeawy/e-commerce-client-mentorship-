import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const TopHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div className="bg-black w-full  h-auto md:h-[48px] ">
      <Container>
        <div className="text-white flex items-center h-full flex-col text-center md:flex-row">
          <div className="flex-grow flex justify-center">
            <p className="text-sm font-normal">
              Summer sale for all swim suits and free express delivery - off
              50%!
              <Button
                variant="link"
                className="ml-2 font-semibold text-white underline"
              >
                Shop now
              </Button>
            </p>
          </div>

          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-white text-sm font-normal  md:ml-auto">
                {selectedLanguage}{" "}
                <ChevronDownIcon
                  className="ml-[5px]"
                  width={"24px"}
                  height={"24px"}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black text-white">
              <DropdownMenuItem onClick={() => setSelectedLanguage("English")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedLanguage("Arabic")}>
                Arabic
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
