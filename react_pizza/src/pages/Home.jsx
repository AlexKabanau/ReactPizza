import React, { useState, useEffect } from 'react';
import Categories from '../componets/Categories';
import Sort from '../componets/Sort';
import Skeleton from '../componets/PizzaBlock/Skeleton';
import PizzaBlock from '../componets/PizzaBlock';

export const Home = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating'
  });




  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? `asc` : `desc`;

    fetch(
      `https://650abf4edfd73d1fab08cfdc.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setIsLoading(false)
        setItems(arr);
      });
    window.scrollTo(0, 0)
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(index) => setCategoryId(index)} />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton ket={index} />)
            : items.map((obj) => <PizzaBlock
              key={obj.id}
              {...obj}
            />
            )
        }
        {/* {items.map((obj) => (
              isLoading
                ? <Skeleton />
                : <PizzaBlock
                  key={obj.id}
                  {...obj}
                />
            ))} */}
      </div>

    </div>
  )
}