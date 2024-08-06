import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { VscClose } from "react-icons/vsc";
const Favorite = () => {
  const { favorite } = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <h1 className="text-4xl">Товары и списки</h1>
        <div className="   flex justify-center flex-col items-center gap-[20px] mt-5 gap-5">
          {favorite.map((el) => (
            <div className="w-[350px] h-[400px] bg-slate-100  text-white  gap-[20px] rounded-[20px] relative mt-5">
              <div className="mt-2 ml-2 flex gap-2 items-center justify-start objet-cover flex-col">
                <img
                  className="rounded-[10px] objet-cover  "
                  src={el.img}
                  width={200}
                  alt="img"
                />

                <p className="flex">
                  <svg
                    style={{
                      color: el.rating >= 1 ? "rgb(230, 171, 34)" : "gray",
                    }}
                    className="w-4 h-4  ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    style={{
                      color: el.rating >= 2 ? "rgb(230, 171, 34)" : "gray",
                    }}
                    className="w-4 h-4  ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    style={{
                      color: el.rating >= 3 ? "rgb(230, 171, 34)" : "gray",
                    }}
                    className="w-4 h-4  ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    style={{
                      color: el.rating >= 4 ? "rgb(230, 171, 34)" : "gray",
                    }}
                    className="w-4 h-4  ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    style={{
                      color: el.rating >= 5 ? "rgb(230, 171, 34)" : "gray",
                    }}
                    className="w-4 h-4 ms-1 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </p>
                <p className="flex gap-2 text-red-500 font-[500]">
                  <h3>{`${
                    el.price > 1500 ? (el.price * 60) / 100 : el.price
                  }$`}</h3>
                  <strike className="text-gray-500">
                    {el.price > 1500 ? `${el.price}$` : null}
                  </strike>
                  <p className="h1">{el.price > 1500 ? "-40%" : null}</p>
                </p>
                <h1 className="text-pink-600">{el.name}</h1>
              </div>
              <VscClose
                onClick={() => dispatch({ type: "DEL_FAV", payload: el.id })}
                className="absolute top-0 right-0 text-white cursor-pointer text-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
