import React, { useState, useEffect } from 'react';
import Categories from '../componets/Categories';
import Sort from '../componets/Sort';
import Skeleton from '../componets/PizzaBlock/Skeleton';
import PizzaBlock from '../componets/PizzaBlock';
import Pagination from '../componets/Pagination';
import { SearchContext } from '../App';
import { useContext } from 'react';

export const Home = () => {

  const { searchValue } = useContext(SearchContext)
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating'
  });




  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? `asc` : `desc`;
    const search = searchValue ? `&search=${searchValue}` : ``;


    fetch(
      `https://650abf4edfd73d1fab08cfdc.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setIsLoading(false)
        setItems(arr);
      });
    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items
    // .filter((obj) => (obj.title.toLowerCase().includes(searchValue.toLowerCase())))
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);


  return (
    <div className="container" div>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(index) => setCategoryId(index)} />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading ? skeletons : pizzas
        }
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />

    </div>
  )
}