import React from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Image from "./layout/Image";
import Search from "./layout/Search";
import { MdCardGiftcard } from "react-icons/md";
import Button from "./layout/Button";
import { MdFlashOn } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-[#081621]">
      <Container>
        <Flex className="items-center py-4">
          <div className="w-[15%]">
            <Image className="!w-auto" srcImg="logo.png" altText="logo.png" />
          </div>
          <div className="w-[45%]">
            <Search
              className="w-[580px] pl-5 pr-10 py-3 text-base bg-white outline-none rounded"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="w-[40%] flex justify-between pl-2">
            <a href="#">
              <div className="flex items-center gap-x-4">
                <MdCardGiftcard className="text-[#ef4a23] text-2xl" />
                <div>
                  <h4 className="text-[15px] text-white">Offers</h4>
                  <p className="text-[11px] text-[#ffffff80]">Latest Offers</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="flex items-center gap-x-4">
                <MdFlashOn className="text-[#ef4a23] text-3xl" />
                <div>
                  <h4 className="text-[15px] text-white">17th Deals</h4>
                  <p className="text-[11px] text-[#ffffff80]">Special Deals</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="flex items-center gap-x-4">
                <IoPerson className="text-[#ef4a23] text-2xl" />
                <div>
                  <h4 className="text-[15px] text-white">Account</h4>
                  <p className="text-[11px] text-[#ffffff80]">
                    Register Or Login
                  </p>
                </div>
              </div>
            </a>
            <Button
              btnText="Pc Builder"
              className="!w-auto text-white text-sm px-5 bg-[#1B68A7] rounded"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
