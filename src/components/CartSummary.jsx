import React, { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import { CartContext } from "../context/CartContext";

function CartSummary() {
  const { isDarkMode } = useContext(DarkModeContext);
  const { calculateTotal } = useContext(CartContext);

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
            <h3>${calculateTotal()}</h3>
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
          <div className="flex justify-between items-center my-1">
            <h3 className="text-xl font-bold">Subtotal: </h3>
            <h3 className="text-xl font-bold">${calculateTotal()}</h3>
          </div>
          <button className="bg-green-600 py-3 rounded-lg text-2xl text-white border-2 border-green-600 font-bold">
            Checkout
          </button>
          <button
            className={`text-blue-900 font-extrabold border-2 text-2xl border-gray-500 py-3 rounded-lg ${
              isDarkMode ? "bg-gray-400" : ""
            }`}
          >
            Pay<span className="text-sky-700">Tm</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
