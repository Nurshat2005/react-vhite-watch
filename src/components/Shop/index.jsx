import React from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";

const Shop = () => {
  const { product } = useSelector((s) => s);
  return (
    <div className="">
      <div className="container">
        <div className="mt-[40px] flex flex-wrap gap-[53px] ">
          {product.map((el) => (
            <ProductCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
