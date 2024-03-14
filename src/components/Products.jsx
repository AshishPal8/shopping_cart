import { useContext, useEffect, useState } from "react";
import DarkModeContext from "../context/DarkModeContext";
import axios from "axios";
import ProductCard from "./ProductCard";

function Products() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const url = `https://dummyjson.com/products/?limit=21&skip=${
    count === 0 ? 0 : count * 21
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProducts((prevData) => [...prevData, ...response.data.products]);
        console.log(response.data.products);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  return (
    <div
      className={`w-full px-5 md:px-20 py-8 pt-6 md:pt-24 ${
        isDarkMode ? "bg-[#1E1E1E] text-white" : "bg-white text-black"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center my-4">
        <button
          className="bg-[#40A2E3] py-2 px-4 rounded-lg text-white font-semibold text-xl"
          onClick={() => setCount(count + 1)}
          disabled={disableButton}
        >
          Load More
        </button>
        {disableButton ? <p>You reached 100 products limit</p> : null}
      </div>
    </div>
  );
}

export default Products;
