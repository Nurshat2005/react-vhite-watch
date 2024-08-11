import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard';

const Speakers = () => {
    const {product}=useSelector((s)=>s)
    return (
      <div>
        <div className="container">
          <div className=" flex flex-wrap gap-[53px]">
            {product.map((el) =>
              el.category === "speakers" ? <ProductCard el={el} /> : null
            )}
          </div>
        </div>
      </div>
    );
};

export default Speakers;