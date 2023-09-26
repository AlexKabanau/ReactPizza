// import logo from './logo.svg';
import './scss/app.scss'
import './App.css';
import Header from './componets/Header';
// import Categories from './componets/Categories';
// import Sort from './componets/Sort';
// import PizzaBlock from './componets/PizzaBlock';
// import { useEffect, useState } from 'react';
// import Skeleton from './componets/PizzaBlock/Skeleton';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

// import pizzas from "./assets/pizzas.json"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* <Home /> */}
      </div>

    </div>
  );
}

export default App;
