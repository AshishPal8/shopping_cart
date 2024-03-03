import { createContext, useState } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addItemToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  const removeItemFromWishlist = (itemId) => {
    const newWishlistItems = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(newWishlistItems);
  };

  return (
    <WishlistContext.Provider
      value={{ addItemToWishlist, removeItemFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistProvider };
