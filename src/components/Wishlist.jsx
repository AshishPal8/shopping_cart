import React, { useContext } from "react";
import WishlistCard from "./WishlistCard";
import DarkModeContext from "../context/DarkModeContext";

function Wishlist() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`w-full flex flex-col items-center pt-6 md:pt-24 ${
        isDarkMode ? "bg-[#1E1E1E] text-white" : "bg-white text-black"
      }`}
    >
      <WishlistCard />
      <WishlistCard />
      <WishlistCard />
    </div>
  );
}

export default Wishlist;
