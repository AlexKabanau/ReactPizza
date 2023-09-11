// import logo from './logo.svg';
import './scss/app.scss'
import './App.css';
import Header from './componets/Header';
import Categories from './componets/Categories';
import Sort from './componets/Sort';
import PizzaBlock from './componets/PizzaBlock';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock
              title="Мексиканская"
              price={520} />
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
