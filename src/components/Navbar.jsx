import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <div
        className={`w-full h-[10vh] shadow-xl relative z-50 flex justify-between items-center px-2 md:px-20 gap-2 md:gap-20 ${
          isDarkMode ? "bg-[#121212] text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-3xl font-bold">LOGO</h1>
        <input
          className={`w-full hidden md:block text-[#696e79] bg-[#f5f5f6] px-2 py-2 outline-none focus:border-2 rounded-lg focus:border-slate-700 ${
            isDarkMode ? "text-white bg-[#1E1E1E]" : ""
          }`}
          type="text"
          placeholder="Search for Product"
        />
        <div className="flex justify-center items-center gap-4 md:gap-10">
          <div>
            {isDarkMode ? (
              <FaRegSun
                onClick={toggleDarkMode}
                size={25}
                className="cursor-pointer"
              />
            ) : (
              <FaRegMoon
                onClick={toggleDarkMode}
                size={25}
                className="cursor-pointer"
              />
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            <CiHeart size={25} />
            <p className="text-sm font-semibold">Wishlist</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoBagHandleOutline size={25} />
            <p className="text-sm font-semibold">Cart</p>
          </div>
        </div>
      </div>
      <div className="">
        <input
          className={`w-full block md:hidden outline-none px-4 py-2  text-[#696e79] bg-[#f5f5f6] ${
            isDarkMode ? "text-white bg-[#383838]" : ""
          }`}
          type="text"
          placeholder="Search for Product"
        />
      </div>
    </>
  );
}

export default Navbar;
