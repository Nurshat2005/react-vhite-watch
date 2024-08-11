import React from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";

const Shop = () => {
  const { product,search } = useSelector((s) => s);
  const searchInput =product.filter((el)=>{
    return el.name.toLowerCase().includes(search.toLowerCase());
  })
  return (
    <div className="">
      <div className="container">
        <div className="mt-[40px] flex flex-wrap gap-[53px] ">
          {searchInput.map((el,key) => (
            <ProductCard el={el} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
