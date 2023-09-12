// import logo from './logo.svg';
import './scss/app.scss'
import './App.css';
import Header from './componets/Header';
import Categories from './componets/Categories';
import Sort from './componets/Sort';
import PizzaBlock from './componets/PizzaBlock';

function App() {
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
            <PizzaBlock
              title="Мексиканская"
              price={520} />
            <PizzaBlock />
            {/* <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
