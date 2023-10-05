import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from '../componets/Categories';
import Sort from '../componets/Sort';
import Skeleton from '../componets/PizzaBlock/Skeleton';
import PizzaBlock from '../componets/PizzaBlock';
import Pagination from '../componets/Pagination';
import { SearchContext } from '../App';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';

export const Home = () => {

  const { categoryId, sort } = useSelector(state => state.filter);
  // const sortType = ;
  // console.log(categoryId);
  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext)
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (id) => {
    // console.log(id);
    dispatch(setCategoryId(id));
  }

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? `asc` : `desc`;
    const search = searchValue ? `&search=${searchValue}` : ``;


    axios.get(`https://650abf4edfd73d1fab08cfdc.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
    .then((response) => {
      // console.log(response)
      setIsLoading(false)
      setItems(response.data);
    });

    // fetch(
    //   `https://650abf4edfd73d1fab08cfdc.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setIsLoading(false)
    //     setItems(arr);
    //   });

    window.scrollTo(0, 0)

  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items
    // .filter((obj) => (obj.title.toLowerCase().includes(searchValue.toLowerCase())))
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);


  return (
    <div className="container" div>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
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