import React, { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

function CartSummary() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`mt-6 bg-gray-300 rounded-lg mx-5 p-6 ${
        isDarkMode ? "bg-gray-700" : ""
      }`}
    >
      <div>
        <h1 className="text-xl font-bold ">Order Summary</h1>
        <div className="mt-3">
          <div className="flex justify-between items-center my-2">
            <h3>Subtotal: </h3>
            <h3>$23</h3>
          </div>
          <div className="flex justify-between items-center my-2">
            <h3>Estimated Tax: </h3>
            <h3>$0.00</h3>
          </div>
          <div className="flex justify-between items-center my-2">
            <h3>Estimated Shipping: </h3>
            <h3>$0.00</h3>
          </div>
        </div>
        <div className="border-t-2 border-gray-400 my-3 py-3 flex flex-col gap-4">
          <button className="bg-green-600 py-3 rounded-lg text-2xl text-white border-2 border-green-600 font-bold">
            Checkout
          </button>
          <button className="text-blue-900 font-extrabold border-2 text-2xl border-gray-500 py-3 rounded-lg">
            Pay<span className="text-sky-700">Tm</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
