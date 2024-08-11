import "./App.css";

import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Admin from "./components/Admin";
import About from "./components/About";
import Shop from "./components/Shop";
import Favorite from "./components/Favorite";
import Basket from "./components/Basket";
import Mobile from "./components/Mobile";
import Laptop from "./components/Laptops";
import Headphones from "./components/Headphones";
import TV from "./components/Tv";
import Speakers from "./components/Speakers";

const App = () => {
  let routes = [
    {
      id: 1,
      Link: "/",
      element: <About />,
    },
    {
      id: 2,
      Link: "/shop",
      element: <Shop />,
    },
    {
      id: 3,
      Link: "/categories",
      element: <Categories />,
    },
    {
      id: 4,
      Link: "/admin",
      element: <Admin />,
    },
    {
      id: 5,
      Link: "/favorite",
      element: <Favorite />,
    },
    {
      id: 6,
      Link: "/mobile",
      element: <Mobile />,
    },
    {
      id: 7,
      Link: "/laptops",
      element: <Laptop />,
    },
    {
      id: 8,
      Link: "/headphones",
      element: <Headphones />,
    },
    {
      id: 9,
      Link: "/tv",
      element: <TV />,
    },
    {
      id: 10,
      Link: "/speakers",
      element: <Speakers/>,
    },
    {
      id: 11,
      Link: "/basket",
      element: <Basket />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.Link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default App;
