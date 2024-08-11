import React from "react";
import mobile from "../../assets/img/mobile1.svg";
import laptops from "../../assets/img/laptops.svg";
import headphones from "../../assets/img/aksesuar.svg";
import tv from "../../assets/img/tv.svg";
import speacer from "../../assets/img/spaekers.svg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="">
      <div className="container">
        <div>
          <h1 className="text-[50px] mt-[30px] mb-[30px]">
            Trending Categories
          </h1>
          <div className="  flex justify-between item-center">
            <div className=" flex flex-col items-center justify-center gap-2">
              <Link to={"/mobile"}>
                <img src={mobile} alt="img" />
              </Link>
              <h2 className="text-xl">Mobiles</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Link to={"/laptops"}>
                <img src={laptops} alt="img" />
              </Link>
              <h2 className="text-xl">Laptops</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Link to={"/headphones"}>
                <img src={headphones} alt="img" />
              </Link>
              <h2 className="text-xl">Headphones</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Link to={"/TV"}>
                <img src={tv} alt="img" />
              </Link>
              <h2 className="text-xl">Monitors & TVs</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Link to={"/speakers"}>
                <img src={speacer} alt="img" />
              </Link>
              <h2 className="text-xl">Speakers</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
