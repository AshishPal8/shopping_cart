import { useContext } from "react";
import WishlistCard from "./WishlistCard";
import DarkModeContext from "../context/DarkModeContext";
import { WishlistContext } from "../context/wishlistContext";

function Wishlist() {
  const { isDarkMode } = useContext(DarkModeContext);
  const { wishlistItems } = useContext(WishlistContext);

  if (!wishlistItems) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`w-full flex flex-col items-center pt-6 md:pt-24 ${
        isDarkMode ? "bg-[#1E1E1E] text-white" : "bg-white text-black"
      }`}
    >
      <h1>Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <div>No items in wishlist</div>
      ) : (
        wishlistItems.map((item, index) => (
          <WishlistCard key={index} item={item} />
        ))
      )}
    </div>
  );
}

export default Wishlist;
