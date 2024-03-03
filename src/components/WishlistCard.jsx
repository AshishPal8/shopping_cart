import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import DarkModeContext from "../context/DarkModeContext";
import { WishlistContext } from "../context/wishlistContext";

function WishlistCard({ item, index }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const { removeItemFromWishlist } = useContext(WishlistContext);

  const handleRemove = () => {
    removeItemFromWishlist(index);
  };
  return (
    <div
      className={`w-72 md:w-[700px] lg:w-[700px] p-6 my-5 rounded-xl relative shadow-xl flex flex-col md:flex-row ${
        isDarkMode ? "bg-[#222222] text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full h-[200px] rounded-xl overflow-hidden mr-4">
        <img
          className={`object-cover ${isDarkMode ? "" : "mix-blend-multiply"}`}
          src={item.image}
          alt={item.title}
        />
      </div>
      <div>
        <h6 className="text-sm uppercase font-bold text-gray-500">
          {item.brand}
        </h6>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <h2 className="text-3xl font-extrabold">${item.price}</h2>
        </div>
        <div>
          <h4 className="text-gray-500 uppercase font-bold text-sm">
            Description
          </h4>
          <p className="text-sm font-medium text-gray-600">
            {item.description}
          </p>
        </div>
        <div className="w-full mt-5 flex justify-between gap-5">
          <div
            className="flex justify-center items-center gap-2 bg-[#0794C5] py-2 px-3 font-bold text-lg text-white rounded-full cursor-pointer"
            onClick={() => handleRemove}
          >
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
