import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import Categories from '../componets/Categories';
import Sort, { sortList } from '../componets/Sort';
import Skeleton from '../componets/PizzaBlock/Skeleton';
import PizzaBlock from '../componets/PizzaBlock';
import Pagination from '../componets/Pagination';
import { SearchContext } from '../App';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';

export const Home = () => {

  const { categoryId, sort, currentPage } = useSelector(state => state.filter);
  // const sortType = ;
  // console.log(categoryId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { searchValue } = useContext(SearchContext)
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (id) => {
    // console.log(id);
    dispatch(setCategoryId(id));
  }

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  const fetchPizzas = () => {
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
  }

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      // console.log(params)

      const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)

      dispatch(setFilters({
        ...params,
        sort
      }))
      isSearch.current = true;
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas()
    }
    isSearch.current = false;


  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage
      })
  
      navigate(`?${queryString}`)
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

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
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />

    </div>
  )
}