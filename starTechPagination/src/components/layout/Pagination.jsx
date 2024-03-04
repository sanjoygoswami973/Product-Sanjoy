import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Image from "./Image";
import { itemDetails } from "../../data/data";
import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";

const items = [...itemDetails];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div className="w-[19%]  p-2 shadow-xl">
            <Image key={index} altText={item.alt} srcImg={item.imgName} />
            <h2 className="text-sm font-semibold my-4 text-[#111]">
              {item.heading}
            </h2>
            <ul className="list-disc pl-5 text-[13px] text-[#666] border-b border-solid border-[#C4C4C4] pb-7  h-[190px]">
              <li className="pb-2">{item.list1}</li>
              <li className="pb-2">{item.list2}</li>
              <li className="pb-2">{item.list3}</li>
              <li>{item.list4}</li>
            </ul>
            <div className="text-center my-3">
              <h3 className="text-lg font-semibold text-[#EF4A23]">
                {item.price}
              </h3>
            </div>
            <Button
              className="text-[#3749bb] bg-[#d2d4d6] hover:text-[white] hover:bg-[#3749bb] duration-300"
              btnText="Buy Now"
              iconName={<FaShoppingCart />}
            />
            <Button
              className="text-[#111] hover:bg-[#C4C4C4] mt-3 duration-300"
              btnText="Add to Compare"
              iconName={<MdAddBox />}
            />
            {/* <h3>Item #{item}</h3> */}
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(newOffset);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex gap-x-4 flex-wrap gap-y-7">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="NEXT"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="PREV"
        renderOnZeroPageCount={null}
        containerClassName=" flex gap-x-1.5 items-center mt-12"
        pageClassName="text-black rounded"
        pageLinkClassName="py-2 px-3.5 inline-block text-sm "
        activeClassName="bg-[#EF4A23] text-white"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
      />
      <p className=" text-sm text-[#111] absolute right-0 bottom-[63px]">
        Showing {itemOffset} to {endOffset} of {items.length}
      </p>
    </>
  );
};

export default Pagination;
