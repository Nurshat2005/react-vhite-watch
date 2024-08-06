import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Admin = () => {
  const { product } = useSelector((s) => s);
  const [UrlProduct, setUrlProduct] = useState("");
  const [NameProduct, setNameProduct] = useState("");
  const [PriceProduct, setPriceProduct] = useState("");
  const [Description, setDescription] = useState("");
  const dispatch = useDispatch();
  const Erorr = () => {
    toast.error("🤦 Пожалуйста заполните все обязательные поля!!", {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const Massage = () => {
    toast.error("🤦 Вы дабавили этот продукт!!", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const someProduct = product.some((som) => som.name === NameProduct);
  const image = product.some((el) => el.img === UrlProduct);
  const ProductAdmin = () => {
    if (
      UrlProduct.trim() === "" ||
      NameProduct.trim() === "" ||
      PriceProduct.trim() === "" ||
      Description.trim() === ""
    ) {
      Erorr();
    } else if (someProduct || image) {
      Massage();
    } else {
      let main = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        img: UrlProduct,
        name: NameProduct,
        price: PriceProduct,
        rating: Math.round(Math.random() * 5),
        description: Description,
      };
      dispatch({ type: "ADD", payload: main });
      setNameProduct("");
      setPriceProduct("");
      setUrlProduct("");
      setDescription("");
    }
  };

  return (
    <div className="my-[100px] " id="about">
      <div className="container">
        <div className=" flex flex-col items-center gap-8">
          <input
            type="text"
            placeholder="Product Url"
            className=" text-1xl outline-none border-b-2 border-black border-solid py-2 w-[400px]"
            onChange={(e) => setUrlProduct(e.target.value)}
            value={UrlProduct}
          />
          <input
            type="text"
            placeholder="Product Name"
            className=" text-1xl outline-none border-b-2 border-black border-solid py-2 w-[400px]"
            onChange={(e) => setNameProduct(e.target.value)}
            value={NameProduct}
          />
          <input
            type="number"
            placeholder="Product Price"
            className=" text-1xl outline-none border-b-2 border-black border-solid py-2 w-[400px]"
            onChange={(e) => setPriceProduct(e.target.value)}
            value={PriceProduct < 0 ? 1 : PriceProduct}
          />
          <input
            type="text"
            placeholder="Description"
            className=" text-1xl outline-none border-b-2 border-black border-solid py-2 w-[400px]"
            onChange={(e) => setDescription(e.target.value)}
            value={Description}
          />
          <ToastContainer />
          <button
            className=" py-2 text-white px-8 rounded-[15px] bg-blue-600"
            onClick={() => ProductAdmin()}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
