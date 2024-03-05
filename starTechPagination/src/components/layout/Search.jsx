import React from "react";
import { IoMdSearch } from "react-icons/io";

const Search = ({ className, placeholder, type }) => {
  return (
    <div className="relative">
      <input className={className} type={type} placeholder={placeholder} />
      <IoMdSearch className=" absolute right-7 top-1/2 -translate-y-1/2 text-2xl" />
    </div>
  );
};

export default Search;
