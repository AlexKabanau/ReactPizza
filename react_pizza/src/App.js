// import logo from './logo.svg';
import './scss/app.scss'
import './App.css';
import Header from './componets/Header';
import Categories from './componets/Categories';
import Sort from './componets/Sort';
import PizzaBlock from './componets/PizzaBlock';
import { useEffect, useState } from 'react';

// import pizzas from "./assets/pizzas.json"

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://650abf4edfd73d1fab08cfdc.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      })
  }, [])

  //https://650abf4edfd73d1fab08cfdc.mockapi.io/items



  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
