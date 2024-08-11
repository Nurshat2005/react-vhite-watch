import React from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";
const TV = () => {
  const { product } = useSelector((s) => s);
  return (
    <div>
      <div className="container">
        <div className=" flex flex-wrap gap-[53px]">
          {product.map((el) =>
            el.category === "tv" ? <ProductCard el={el} /> : null
          )}
        </div>
      </div>
    </div>
  );
};

export default TV;
