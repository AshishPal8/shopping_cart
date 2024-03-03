import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import DarkModeContext from "../context/DarkModeContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/wishlistContext";

function ProductCard({ product }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const { addItemToCart } = useContext(CartContext);
  const { addItemToWishlist } = useContext(WishlistContext);

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  const handleAddToWishlist = () => {
    addItemToWishlist(product);
    console.log(product);
  };

  return (
    <div
      className={`w-72 md:w-80 lg:w-96 p-6 my-5 rounded-xl relative shadow-xl ${
        isDarkMode ? "bg-[#222222] text-white" : "bg-white text-black"
      }`}
    >
      <div
        className="absolute z-10 right-5 top-5 h-8 w-8 bg-black/40 rounded-full text-white flex justify-center items-center cursor-pointer"
        onClick={handleAddToWishlist}
      >
        <CiHeart size={25} />
      </div>
      <div className="w-full h-[200px] overflow-hidden mb-2">
        <img
          className={`object-cover ${isDarkMode ? "" : "mix-blend-multiply"}`}
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <h6 className="text-sm uppercase font-bold text-gray-500">
        {product.brand}
      </h6>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-2xl font-bold">{product.title}</h3>
        <h2 className="text-3xl font-extrabold">${product.price}</h2>
      </div>
      <div>
        <h4 className="text-gray-500 uppercase font-bold text-sm">
          Description
        </h4>
        <p className="text-sm font-medium text-gray-600">
          {product.description}
        </p>
      </div>
      <div className="w-full mt-5">
        <div
          className="flex justify-center items-center gap-2 bg-[#40A2E3] py-2 font-bold text-lg text-white rounded-full cursor-pointer hover:bg-sky-600"
          onClick={handleAddToCart}
        >
          <IoBagHandleOutline size={25} />
          Add to Cart
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
