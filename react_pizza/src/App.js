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

<<<<<<< HEAD
=======
// import pizzas from "./assets/pizzas.json"
import FullPizza from './pages/FullPizza';

// export const SearchContext = createContext();
>>>>>>> 4940ae4e41e38fc9b705b486e9af152bf343fda5

function App() {




  return (
<<<<<<< HEAD
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/:id' element={<FullPizza />} />
        <Route path='*' element={<NotFound />} />
      </Route>

    </Routes>
=======
    <div className="wrapper">
      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}> */}
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pizza/:id' element={<FullPizza />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      {/* </SearchContext.Provider> */}
    </div>
>>>>>>> 4940ae4e41e38fc9b705b486e9af152bf343fda5
  );
}

export default App;
