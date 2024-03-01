import React, { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import CartCard from "./CartCard";
import CartSummary from "./CartSummary";

function Cart() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`w-full flex flex-col-reverse md:flex-row pt-5  md:pt-24 px-4 ${
        isDarkMode ? "bg-[#1E1E1E] text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full md:w-2/3 flex flex-col items-center">
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
      <div className="w-full md:w-1/3 relative md:fixed  right-0 top-0 md:top-20">
        <CartSummary />
      </div>
    </div>
  );
}

export default Cart;
