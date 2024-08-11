import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { VscClose } from "react-icons/vsc";
import ProductCard from "../ProductCard";
import not from "../../assets/img/product-not-found.jpg";
const Favorite = () => {
  const { favorite } = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="container">
        <h1 className="text-4xl mb-10">Товары и списки</h1>
        <div className="flex">
          {favorite.length ? (
            <div className=" flex gap-[40px] flex-wrap item-center">
              {favorite.map((el) => (
                <ProductCard el={el} />
              ))}
            </div>
          ) : (
            <div
              style={{
                backgroundImage: `${not}`,
                minHeight: "40vh",
              }}
              className=""
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
