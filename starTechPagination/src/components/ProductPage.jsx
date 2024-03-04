import React, { useState } from "react";
import Container from "./layout/Container";
import Navber from "./Navber";
import Title from "./layout/Title";
import Pagination from "./layout/Pagination";

const ProductPage = () => {
  let [showNumber, setShowNumber] = useState(20);
  let handlePaginationClick = (e) => {
    console.log(e.target.value);
    setShowNumber(+e.target.value);
  };
  return (
    <div>
      <Container>
        <Navber />
        <Title />
      </Container>
      <div className="bg-[#F2F4F8]">
        <Container>
          <div className="relative pt-8 pb-14">
            <div className="flex justify-between mb-14 py-2.5 shadow-lg px-5">
              <h1 className="font-bold text-base text-black">HP</h1>
              <div className="flex justify-end gap-x-5">
                <form className="w-[105px] flex justify-between items-center">
                  <label
                    htmlFor="countries"
                    className="font-dm font-medium text-base text-[#767676]"
                  >
                    Show:
                  </label>
                  <select
                    onClick={handlePaginationClick}
                    id="countries"
                    className=" font-dm font-semibold text-sm bg-[#f1f3f5] text-[#000000] border border-[#F0F0F0] focus:ring-blue-500 focus:border-blue-500 w-[50px] px-1 py-1"
                  >
                    <option defaultValue="20">20</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                    <option value="75">75</option>
                    <option value="90">90</option>
                  </select>
                </form>
                <form className="w-[178px] flex justify-between items-center">
                  <label
                    htmlFor="countries"
                    className="font-dm font-medium text-base text-[#767676]"
                  >
                    Sort by:
                  </label>
                  <select
                    id="countries"
                    className=" font-dm font-semibold text-sm bg-[#f1f3f5] text-[#000000] border border-[#F0F0F0] focus:ring-blue-500 focus:border-blue-500 w-[110px] px-1 py-1"
                  >
                    <option defaultValue="DF">Default</option>
                    <option value="LH">Price (Low To High)</option>
                    <option value="HL">Price (High To Low)</option>
                  </select>
                </form>
              </div>
            </div>
            <Pagination itemsPerPage={showNumber} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProductPage;
