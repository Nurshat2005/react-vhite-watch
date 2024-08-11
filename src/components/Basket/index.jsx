import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Basket = () => {
const {basket}=useSelector((s)=>s)
  return (
    <div>
      <div className="container">
        <div className=" flex items-center  gap-[50px] flex-wrap">
          {basket.map((el) => (
            <ProductCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
