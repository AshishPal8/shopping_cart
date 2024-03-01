import { useContext, useEffect, useState } from "react";
import DarkModeContext from "../context/DarkModeContext";
import axios from "axios";
import ProductCard from "./ProductCard";

function Products() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [products, setProducts] = useState([]);
  const url = "https://dummyjson.com/products/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={`w-full px-5 md:px-20 py-8 ${
        isDarkMode ? "bg-[#1E1E1E] text-white" : "bg-white text-black"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
