import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import DarkModeContext from "../context/DarkModeContext";

function WishlistCard() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`w-72 md:w-[700px] lg:w-[700px] p-6 my-5 rounded-xl relative shadow-xl flex flex-col md:flex-row ${
        isDarkMode ? "bg-[#222222] text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full h-[200px] rounded-xl overflow-hidden mr-4">
        <img
          className={`object-cover ${isDarkMode ? "" : "mix-blend-multiply"}`}
          src="https://cdn.dummyjson.com/product-images/1/3.jpg"
          alt=""
        />
      </div>
      <div>
        <h6 className="text-sm uppercase font-bold text-gray-500">Apple</h6>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold">iphone X</h3>
          <h2 className="text-3xl font-extrabold">$1200</h2>
        </div>
        <div>
          <h4 className="text-gray-500 uppercase font-bold text-sm">
            Description
          </h4>
          <p className="text-sm font-medium text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit ullam a suscipit.
          </p>
        </div>
        <div className="w-full mt-5 flex justify-between gap-5">
          <div className="flex justify-center items-center gap-2 bg-[#0794C5] py-2 px-3 font-bold text-lg text-white rounded-full cursor-pointer">
            <FaHeart size={25} />
          </div>
          <div className="w-full flex justify-center items-center gap-2 bg-[#0794C5] py-2 font-bold text-lg text-white rounded-full cursor-pointer">
            <IoBagHandleOutline size={25} />
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
