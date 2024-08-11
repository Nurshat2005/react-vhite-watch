import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VscClose } from "react-icons/vsc";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { FiShoppingBag } from "react-icons/fi";
const ProductCard = ({ el }) => {
  const dispatch = useDispatch();
  const { favorite, product, basket } = useSelector((s) => s);
  console.log(basket);
  const [Disp, setDisp] = useState("none");
  const SuccesMasage = () => {
    toast.error(" Вы удалили этот продукт!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const basSome = basket.some((igy) => igy.id === el.id);
  const AddTOBas = () => {
    if (basSome) {
      dispatch({ type: "DEL_BASKET", payload: el.id });
    } else {
      dispatch({ type: "BASKET", payload: el });
    }
  };

  const Somefav = favorite.some((ell) => ell.id === el.id);

  const Massage = () => {
    toast.success(" Вы дабавили этот продукт!!", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const AddProduct = () => {
    if (Somefav) {
      dispatch({ type: "DEL_FAV", payload: el.id });
      SuccesMasage();
    } else {
      dispatch({ type: "ADDFAVORITE", payload: el });
      Massage();
    }
  };

  return (
    <div>
      <div className="container">
        <div className="">
          <div className=" relative w-[280px] rounded-[10px]  bg-[#F9F9F9] h-[500px] mb-20 flex flex-col justify-center  items-center gap-2 ">
            <a
              onClick={() => AddProduct()}
              className="text-2xl text-black cursor-pointer absolute top-1 left-1"
            >
              <IoMdHeartEmpty />
            </a>
            <Zoom>
              <div className=" w-[200px] flex items-center">
                <img
                  className="rounded-[6px] w-full  "
                  src={el.img}
                  alt="img"
                />
              </div>
            </Zoom>
            <div class="flex items-center justify-center">
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
            </div>

            <div className="flex  items-center justify-center">
              <h2 className=" font-thin text-red-600 font-[800]">
                {Math.round(el.price > 1500 ? (el.price * 60) / 100 : el.price)}
                $
              </h2>
              <strike className="text-xs text-gray-500">
                <h6>{el.price > 1500 ? `${el.price}$` : null}</h6>
              </strike>
              <h1 className="h1 gap-[10px] text-xs">
                {el.price > 1500 ? `-40%` : null}
              </h1>
            </div>
            <h6
              onMouseOut={() => setDisp("none")}
              onMouseOver={() => setDisp("block")}
              className="text-xs font-[400] cursor-pointer"
            >
              {el.name}
            </h6>

            <a
              onClick={() => dispatch({ type: "DELETE", payload: el.id })}
              className="cursor-pointer absolute top-1 right-2"
            >
              <VscClose />
            </a>
            <a className="cursor-pointer" onClick={() => AddTOBas()}>
              <FiShoppingBag />
            </a>
            <div
              style={{
                display: Disp,
              }}
              className={`modal transition-all bg-[#5c5a5a48] w-[260px] h-[300px] absolute  z-[200] top-0 rounded-[20px] flex items-start right[-50px] justify-start`}
            >
              <p className="text-xs font-[500] ml-5">{el.description}</p>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
