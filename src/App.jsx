import './App.css'

import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Categories from './components/Categories'
import Admin from './components/Admin'
import About from './components/About'
import Shop from './components/Shop'
import Favorite from './components/Favorite'
import Basket from './components/Basket'

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
      Link: "/basket",
      element: <Basket />,
    },
  ];
	return (
		<>
			<Header />
			<Routes>
				{routes.map(el => (
					<Route path={el.Link} element={el.element} key={el.id} />
				))}
			</Routes>
		</>
	)
}

export default App
