// import logo from './logo.svg';
import './scss/app.scss'
import './App.css';
// import Header from './componets/Header';
// import Categories from './componets/Categories';
// import Sort from './componets/Sort';
// import PizzaBlock from './componets/PizzaBlock';
// import { useEffect, useState } from 'react';
// import Skeleton from './componets/PizzaBlock/Skeleton';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
// import { createContext, useState } from 'react';
import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';


function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/:id' element={<FullPizza />} />
        <Route path='*' element={<NotFound />} />
      </Route>

    </Routes>
  );
}

export default App;
