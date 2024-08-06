import React from "react";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const { heart } = useSelector((s) => s);
  return (
    <div className="flex justify-between items-center py-[20px] w-full">
      <div className="container ">
        <div className="flex justify-between items-center ">
          <div className="text-3xl font-normal   ">
            <a>ShopVerse</a>
          </div>
          <div className=" flex  gap-7">
            <Link to="/">About</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/categories"}>Categories</Link>
            <Link to={"/admin"}>Admin</Link>
          </div>
          <div className="">
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white cursor-pointer"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-2 ps-10 text-sm text-gray-400 border border-gray-300 rounded-2xl   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                  placeholder="Search for“Phones”"
                />
              </div>
            </form>
          </div>
          <div className=" text-[30px] flex gap-5 items-center">
            <Link to={"/favorite"}>
              <a
                style={{
                  color: heart ? "red" : "black",
                }}
                className=" "
              >
                <CiHeart />
              </a>
            </Link>
            <Link to={"/basket"}>
              <a className="  text-black ">
                <FiShoppingBag />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
