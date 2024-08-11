import React from "react";
import { useDispatch, useSelector } from "react-redux";
import bg from ".././../assets/img/photo.png";
import watch from ".././../assets/img/watch.svg";
import watch2 from ".././../assets/img/watch-2.svg";
import { VscClose } from "react-icons/vsc";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ProductCard from "../ProductCard";
import nike from "../../assets/img/nike.svg";
import playstation from "../../assets/img/plastation.svg";
const About = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((s) => s);
  return (
    <div className="about">
      <div className="container flex flex-col gap-12 ">
        <div
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "600px",
          }}
          className="flex justify-between items-start relative"
        >
          <div className="flex flex-col my-[200px] gap-2 ml-3">
            <h3 className="text-3xl     font-extralight text-white uppercase ">
              Sale up to 20% off
            </h3>

            <h1 className=" text-5xl  font-semibold text-white">
              Apple Watch Ultra 2
            </h1>
            <p className="tracking-[2px]  font-thin text-white ">
              The most rugged and capable Apple Watch pushes <br /> the limits
              again. Featuring the all-new S9 SiP.
            </p>
            <div className=" flex  gap-6 my-4">
              <button className=" bg-red-500 rounded-xl  font-extralight text-white text-xs flex justify-center items-center w-[100px] h-[30px] ">
                Favorites Entry
              </button>
              <button className=" bg-white rounded-xl  font-extralight text-black text-xs flex justify-center items-center w-[100px] ">
                Login Admin
              </button>
            </div>
          </div>
          <div className="flex items-center absolute right-[0px] ">
            <img width={350} className="   " src={watch} alt="img" />

            <img width={230} className="" src={watch2} alt="img" />
          </div>
        </div>
        <div className=" flex justify-between mt-[50px]">
          <div className=" flex flex-col items-center overflow-hidden gap-2 bg-[#FAFAFA] w-[600px] h-[400px] justify-center">
            <h1 className="text-[40px] font-[500]">Nike, Adidas</h1>
            <p className="font-[200]">MIN 40% OFF</p>
            <img src={nike} alt="img" width={400} />
          </div>
          <div className=" flex flex-col items-center overflow-hidden gap-2 bg-[#FAFAFA] w-[600px] h-[400px] justify-center">
            <h1 className="text-[40px] font-[500]">PlayStation 5</h1>
            <p className="font-[200]">MIN 25% OFF</p>
            <img src={playstation} alt="img" width={400} />
          </div>
        </div>
        <div className=" flex  flex-wrap gap-[53px] ">
          {product
            .filter((el) => el.price > 1500)
            .map((el) => (
              <ProductCard el={el} key={el.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
